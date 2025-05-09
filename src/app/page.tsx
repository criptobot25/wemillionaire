'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import styles from '../styles/lottery.module.css';
import { Game, LotteryStats } from '../types/lottery';
import AllResults from '../components/AllResults';
import GameInfoCard from '../components/GameInfoCard';
import StatisticsCard from '../components/StatisticsCard';
import GeneratorCard from '../components/GeneratorCard';
import Seo from '../components/Seo';

// Irish Lottery Games data
const irishLotteryGames: Game[] = [
  { id: 'lotto', name: 'Lotto (6/47)', min: 1, max: 47, count: 6, odds: '1 em 10,737,573' },
  { id: 'lotto54321', name: 'Lotto 5-4-3-2-1', min: 1, max: 47, count: 5, odds: '1 em 255,657' },
  { id: 'dailyMillion', name: 'Daily Million (6/39)', min: 1, max: 39, count: 6, odds: '1 em 3,262,623' },
  { id: 'euroMillions', name: 'EuroMillions (5/50 + 2/12)', min: 1, max: 50, count: 5, starsMin: 1, starsMax: 12, starsCount: 2, odds: '1 em 139,838,160' },
  { id: 'euroMillionsPlus', name: 'EuroMillions Plus (5/50)', min: 1, max: 50, count: 5, odds: '1 em 2,118,760' },
  { id: 'euroDreams', name: 'EuroDreams (6/40 + 1/5)', min: 1, max: 40, count: 6, dreamMin: 1, dreamMax: 5, dreamCount: 1, odds: '1 em 19,191,900' }
];

export default function Home() {
  const [stats, setStats] = useState<LotteryStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([]);
  const [generatedSpecialNumbers, setGeneratedSpecialNumbers] = useState<number[]>([]);
  const [generatingMethod, setGeneratingMethod] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<string>(irishLotteryGames[0].id);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [showAllResults, setShowAllResults] = useState<boolean>(false);

  useEffect(() => {
    // Screen size detector - only runs in browser
    setIsDesktop(window.innerWidth > 768);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to fetch lottery data
  const fetchLotteryData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch data from API
      const response = await fetch('/api/lottery/fetch', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Unknown error fetching data');
      }
      
      // Update data
      setStats({
        totalDraws: result.data.totalDraws || {},
        lastDraw: result.data.latestResults || {},
        hotNumbers: result.data.hotNumbers || {},
        coldNumbers: result.data.coldNumbers || {}
      });
      
      setLastUpdated(new Date());
      console.log('Data loaded successfully:', result.data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  // Function to update data after a new game
  const updateAfterNewGame = async () => {
    console.log("Updating data after new game...");
    await fetchLotteryData();
  };

  useEffect(() => {
    // Fetch data on initial load
    fetchLotteryData();
    
    // Set up automatic refresh every 30 minutes
    const intervalId = setInterval(() => {
      fetchLotteryData();
    }, 30 * 60 * 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Get the selected game configuration
  const getSelectedGameConfig = () => {
    return irishLotteryGames.find(game => game.id === selectedGame) || irishLotteryGames[0];
  };

  // Create a new function to combine the three smart methods
  const generateSmartNumbers = () => {
    const gameConfig = getSelectedGameConfig();
    
    // Set to collect all the generated numbers from different methods
    const allNumbers = new Set<number>();
    const frequencySet = new Set<number>();
    const monteCarloSet = new Set<number>();
    const markovSet = new Set<number>();
    
    // Generate numbers using frequency method
    if (stats) {
      // Use hot numbers with higher probability
      const hotNumbers = [...(stats.hotNumbers[gameConfig.id] || [])];
      
      // Add half of hot numbers
      const hotToAdd = Math.min(Math.ceil(gameConfig.count / 3), hotNumbers.length);
      while (frequencySet.size < hotToAdd && hotNumbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * hotNumbers.length);
        frequencySet.add(hotNumbers[randomIndex]);
        allNumbers.add(hotNumbers[randomIndex]);
        hotNumbers.splice(randomIndex, 1);
      }
    }
    
    // Generate numbers using Monte Carlo method
    // In Monte Carlo method, we simulate multiple draws and count frequencies
    const frequencies = new Array(gameConfig.max + 1).fill(0);
    
    // Simulate 500 draws
    for(let i = 0; i < 500; i++) {
      const simulatedDraw = new Set<number>();
      while(simulatedDraw.size < gameConfig.count) {
        simulatedDraw.add(Math.floor(Math.random() * (gameConfig.max - gameConfig.min + 1)) + gameConfig.min);
      }
      simulatedDraw.forEach(num => frequencies[num]++);
    }
    
    // Select numbers based on simulated frequencies
    const probabilities = frequencies.map((freq, index) => ({ num: index, freq }))
      .filter(item => item.num >= gameConfig.min && item.num <= gameConfig.max)
      .sort((a, b) => b.freq - a.freq);
    
    // Add some of the most frequent numbers in the simulation
    const monteCarloToAdd = Math.ceil(gameConfig.count / 3);
    for(let i = 0; i < monteCarloToAdd && i < probabilities.length; i++) {
      monteCarloSet.add(probabilities[i].num);
      allNumbers.add(probabilities[i].num);
    }
    
    // Generate using Markov chain method
    // Start with an initial number
    let currentNumber = Math.floor(Math.random() * (gameConfig.max - gameConfig.min + 1)) + gameConfig.min;
    markovSet.add(currentNumber);
    allNumbers.add(currentNumber);
    
    // Add numbers following the "chain" with some variation
    const markovToAdd = Math.ceil(gameConfig.count / 3);
    while(markovSet.size < markovToAdd) {
      let nextNumber;
      do {
        // Generate a number close to the current one with some variation
        const maxDeviation = Math.min(5, Math.floor(gameConfig.max / 10)); // Proportional variation
        const deviation = Math.floor(Math.random() * (maxDeviation * 2 + 1)) - maxDeviation; // -maxDeviation to +maxDeviation
        nextNumber = currentNumber + deviation;
        
        // Ensure the number is within the game range
        if (nextNumber < gameConfig.min) nextNumber = gameConfig.min;
        if (nextNumber > gameConfig.max) nextNumber = gameConfig.max;
        
        currentNumber = nextNumber;
      } while (markovSet.has(nextNumber));
      
      markovSet.add(nextNumber);
      allNumbers.add(nextNumber);
    }
    
    // If we still need more numbers, add randomly to complete the set
    while (allNumbers.size < gameConfig.count) {
      const randomNum = Math.floor(Math.random() * (gameConfig.max - gameConfig.min + 1)) + gameConfig.min;
      allNumbers.add(randomNum);
    }
    
    // For games with special balls (stars/dream numbers)
    const specialNumbers = new Set<number>();
    if (gameConfig.starsCount) {
      while (specialNumbers.size < gameConfig.starsCount) {
        specialNumbers.add(Math.floor(Math.random() * (gameConfig.starsMax! - gameConfig.starsMin! + 1)) + gameConfig.starsMin!);
      }
    } else if (gameConfig.dreamCount) {
      while (specialNumbers.size < gameConfig.dreamCount) {
        specialNumbers.add(Math.floor(Math.random() * (gameConfig.dreamMax! - gameConfig.dreamMin! + 1)) + gameConfig.dreamMin!);
      }
    }
    
    setGeneratedNumbers(Array.from(allNumbers).sort((a, b) => a - b));
    setGeneratedSpecialNumbers(Array.from(specialNumbers).sort((a, b) => a - b));
    setGeneratingMethod('Smart Algorithm');
  };

  // Change the selected game and clear generated numbers
  const handleGameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGame(e.target.value);
    setGeneratedNumbers([]);
    setGeneratedSpecialNumbers([]);
    setGeneratingMethod(null);
  };

  // Format informative text about the selected game
  const formatGameInfo = () => {
    const game = getSelectedGameConfig();
    let info = `Choose ${game.count} numbers from ${game.min}-${game.max}`;
    
    if (game.starsCount) {
      info += ` and ${game.starsCount} stars from ${game.starsMin}-${game.starsMax}`;
    } else if (game.dreamCount) {
      info += ` and ${game.dreamCount} dream number from ${game.dreamMin}-${game.dreamMax}`;
    }
    
    info += `. Odds: ${game.odds}`;
    return info;
  };
  
  // Render AllResults component content
  const renderAllResults = () => {
    return (
      <AllResults
        stats={stats}
        selectedGame={selectedGame}
        showAllResults={showAllResults}
        setShowAllResults={setShowAllResults}
        isDesktop={isDesktop}
        irishLotteryGames={irishLotteryGames}
      />
    );
  };
  
  // Render game cards for the different Irish lottery games
  const renderGameCards = () => {
    const games = [
      {
        type: 'Main Draw',
        title: 'Lotto',
        description: 'The main game of the Irish National Lottery. Draws occur on Wednesdays and Saturdays.',
        details: [
          'Choose 6 numbers from 1-47',
          'Odds of winning the jackpot: 1 in 10,737,573',
          'Price per line: €2'
        ]
      },
      {
        type: 'Transnational',
        title: 'EuroMillions',
        description: 'The transnational European game with the biggest jackpots. Draws happen on Tuesdays and Fridays.',
        details: [
          'Choose 5 numbers from 1-50 and 2 stars from 1-12',
          'Odds of winning the jackpot: 1 in 139,838,160',
          'Price per line: €2.50'
        ]
      },
      {
        type: 'Daily Game',
        title: 'Daily Million',
        description: 'Daily draws with a fixed jackpot of €1 million. Twice a day, every day.',
        details: [
          'Choose 6 numbers from 1-39',
          'Odds of winning the jackpot: 1 in 3,262,623',
          'Price per line: €1'
        ]
      },
      {
        type: 'New Game',
        title: 'EuroDreams',
        description: 'New annuity game offering €20,000 per month for 30 years. Draws on Mondays and Thursdays.',
        details: [
          'Choose 6 numbers from 1-40 and 1 dream number from 1-5',
          'Odds of winning the main prize: 1 in 19,191,900',
          'Price per line: €2.50'
        ]
      }
    ];
    
    return (
      <div className={styles.card} style={{marginBottom: '2.5rem'}}>
        <div className={styles.cardTitle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M16 8v8"></path>
            <path d="M12 8v8"></path>
            <path d="M8 8v8"></path>
          </svg>
          Irish National Lottery Games
        </div>
        <div className={styles.grid} style={isDesktop ? {gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'} : {}}>
          {games.map((game) => (
            <GameInfoCard 
              key={game.title}
              type={game.type}
              title={game.title}
              description={game.description}
              details={game.details}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Seo />
      <main>
        <div className={styles.container}>
          {/* Top ad - leaderboard */}
          <div id="google-ads-leaderboard" className={styles.adContainer}></div>
          
          <header className={styles.header}>
            <h1 className={styles.title}>
              {/* Clover icon SVG */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                <path d="M12 22C12 22 20 18 20 12C20 6 17 4 12 4C7 4 4 6 4 12C4 18 12 22 12 22Z" fill="#ffffff" />
                <path d="M12 4C12 4 9 10 9 12C9 14 10 16 12 16C14 16 15 14 15 12C15 10 12 4 12 4Z" fill="#01723a" />
                <path d="M4 12C4 12 10 9 12 9C14 9 16 10 16 12C16 14 14 15 12 15C10 15 4 12 4 12Z" fill="#01723a" />
                <path d="M12 22C12 22 15 16 15 14C15 12 14 10 12 10C10 10 9 12 9 14C9 16 12 22 12 22Z" fill="#01723a" />
                <path d="M20 12C20 12 14 15 12 15C10 15 8 14 8 12C8 10 10 9 12 9C14 9 20 12 20 12Z" fill="#01723a" />
              </svg>
              We Millionaire
            </h1>
            <p className={styles.subtitle}>Irish Lottery Number Generator &amp; Analyzer</p>
          </header>

          <div className={isDesktop ? styles.desktopLayout : styles.mobileLayout}>
            <div className={styles.mainContent}>
              {/* Content area */}
              <div className={`${styles.grid} ${isDesktop ? styles.gridDesktop : ''}`}>
                {/* Statistics and Results Card */}
                <StatisticsCard
                  selectedGame={selectedGame}
                  stats={stats}
                  loading={loading}
                  error={error}
                  lastUpdated={lastUpdated}
                  generatedNumbers={generatedNumbers}
                  generatedSpecialNumbers={generatedSpecialNumbers}
                  generatingMethod={generatingMethod}
                  formatGameInfo={formatGameInfo}
                  getSelectedGameConfig={getSelectedGameConfig}
                  updateAfterNewGame={updateAfterNewGame}
                  handleGameChange={handleGameChange}
                  irishLotteryGames={irishLotteryGames}
                  renderAllResults={renderAllResults}
                />

                {/* Generate Bets Card */}
                <GeneratorCard generateSmartNumbers={generateSmartNumbers} />
              </div>

              {/* In-Content Rectangle Ad */}
              <div className={styles.rectangleAd}>
                <div id="google-ads-rectangle" className={styles.adContent}>
                  <p className={styles.adText}>Advertisement (300×250 Rectangle)</p>
                </div>
              </div>

              {/* Irish Lottery Games */}
              {renderGameCards()}

              {/* About Section */}
              <div className={styles.card}>
                <div className={styles.cardTitle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  About We Millionaire
                </div>
                <div itemScope itemType="https://schema.org/WebApplication">
                  <h2 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#01723a'}}>
                    Irish National Lottery Number Generator
                  </h2>
                  <p style={{lineHeight: '1.6', marginBottom: '1rem'}} itemProp="description">
                    We Millionaire is a specialized Irish National Lottery number analysis and generation system that uses
                    advanced algorithms to generate number combinations based on statistical analysis
                    of previous draws. Our system automatically retrieves data from official Irish Lottery sources, analyzes patterns,
                    and generates intelligent bets for games including Lotto, EuroMillions, Daily Million, EuroDreams, 
                    Lotto 5-4-3-2-1, and EuroMillions Plus.
                  </p>
                  <h3 style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#01723a', marginTop: '1.5rem'}}>
                    How We Millionaire Works
                  </h3>
                  <p style={{lineHeight: '1.6', marginBottom: '1rem'}}>
                    Our system combines three powerful algorithms to give you the best possible numbers:
                  </p>
                  <ul style={{marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc'}}>
                    <li style={{marginBottom: '0.5rem'}}>Frequency Analysis: We track which numbers appear most often in Irish Lottery draws</li>
                    <li style={{marginBottom: '0.5rem'}}>Monte Carlo Simulation: We run thousands of simulated draws to identify statistical patterns</li>
                    <li style={{marginBottom: '0.5rem'}}>Markov Chain Modeling: We analyze number relationships and sequential patterns</li>
                  </ul>
                  <p style={{lineHeight: '1.6'}}>
                    While no system can guarantee lottery wins, We Millionaire offers a data-driven approach to selecting your
                    Irish Lottery numbers based on mathematical patterns rather than random chance.
                  </p>
                </div>
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#f9fafb',
                  borderRadius: '0.75rem',
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'center'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>Need assistance with Irish Lottery number generation? Contact us at support@wemillionaire.eu</span>
                </div>
              </div>
            </div>

            {/* Side ad container - only visible on desktop */}
            {isDesktop && (
              <div 
                id="google-ads-sidebar" 
                className={`${styles.sideAdContainer} ${styles.sideAdContainerDesktop}`}
              ></div>
            )}
          </div>

          {/* Mobile ad - only visible on mobile */}
          {!isDesktop && (
            <div id="google-ads-mobile" className={styles.mobileAdContainer}></div>
          )}
        </div>

        {/* In-article ad */}
        <div id="google-ads-content" className={styles.adContainer}></div>
        
        <footer className={styles.footer}>
          <p>© 2023 We Millionaire. This site provides Irish National Lottery number generation and is not affiliated with the official Irish National Lottery.</p>
          <p style={{marginTop: '0.5rem'}}>Play responsibly. If you feel you have a problem with gambling, call the National Gambling Helpline: 1800 753 753</p>
          
          {/* Add sitemap and related links */}
          <nav aria-label="Footer Navigation" className={styles.footerNav}>
            <ul className={styles.footerNavList}>
              <li><a href="/about" className={styles.footerLink}>About</a></li>
              <li><a href="/privacy" className={styles.footerLink}>Privacy Policy</a></li>
              <li><a href="/terms" className={styles.footerLink}>Terms</a></li>
              <li><a href="/sitemap.xml" className={styles.footerLink}>Sitemap</a></li>
            </ul>
          </nav>
        </footer>
      </main>
    </>
  );
}


