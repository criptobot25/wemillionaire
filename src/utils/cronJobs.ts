import { Cron } from 'croner';
import axios from 'axios';

/**
 * Initialize cron jobs to run in the background
 * This should be called once when the server starts
 */
export function initializeCronJobs() {
  // Schedule lottery results update - runs Wednesday and Saturday at 10:30 PM (after Irish Lotto draws)
  // Irish Lotto draws occur Wednesday and Saturday at 8:00 PM, we schedule this after enough time for results to be published
  Cron('30 22 * * 3,6', async () => {
    console.log(`[${new Date().toISOString()}] Running scheduled lottery results update...`);
    try {
      // Call our API endpoint to fetch latest results
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
      const response = await axios.get(`${baseUrl}/api/lottery/fetch`);
      
      if (response.data.success) {
        console.log(`[${new Date().toISOString()}] Lottery results updated successfully - ${response.data.count} new results saved`);
      } else {
        console.error(`[${new Date().toISOString()}] Lottery update failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error(`[${new Date().toISOString()}] Error updating lottery results:`, error);
    }
  });

  // Schedule daily statistics recalculation
  // This runs every day at 03:00 AM when server load is typically low
  Cron('0 3 * * *', async () => {
    console.log(`[${new Date().toISOString()}] Recalculating lottery statistics...`);
    try {
      // Trigger the stats endpoint to refresh calculations
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
      const response = await axios.get(`${baseUrl}/api/lottery/stats`);
      
      if (response.data.success) {
        console.log(`[${new Date().toISOString()}] Lottery statistics recalculated successfully`);
      } else {
        console.error(`[${new Date().toISOString()}] Statistics recalculation failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error(`[${new Date().toISOString()}] Error recalculating lottery statistics:`, error);
    }
  });
  
  // Database maintenance job - runs every Sunday at 4:00 AM
  // This could handle tasks like removing old data or optimizing the database
  Cron('0 4 * * 0', async () => {
    console.log(`[${new Date().toISOString()}] Running weekly database maintenance...`);
    try {
      // Here you could add additional maintenance tasks like database optimization, backups, etc.
      // For now, we'll just log that it ran successfully
      console.log(`[${new Date().toISOString()}] Database maintenance completed successfully`);
    } catch (error) {
      console.error(`[${new Date().toISOString()}] Error during database maintenance:`, error);
    }
  });
  
  console.log(`[${new Date().toISOString()}] All cron jobs initialized successfully`);
}

/**
 * Function to manually trigger the update of lottery results
 * This can be used for testing or for one-time updates
 */
export async function manualUpdateLotteryResults() {
  console.log(`[${new Date().toISOString()}] Manually updating lottery results...`);
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const response = await axios.get(`${baseUrl}/api/lottery/fetch`);
    console.log(`[${new Date().toISOString()}] Manual update completed:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error during manual update:`, error);
    throw error;
  }
} 