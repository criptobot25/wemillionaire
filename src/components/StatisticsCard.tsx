import React from 'react';
import styles from '../styles/lottery.module.css';
import { Game, LotteryStats, StatisticsCardProps } from '../types/lottery';
import NumberBall from './NumberBall';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  selectedGame,
  stats,
  loading,
  error,
  lastUpdated,
  generatedNumbers,
  generatedSpecialNumbers,
  generatingMethod,
  formatGameInfo,
  getSelectedGameConfig,
  updateAfterNewGame,
  handleGameChange,
  irishLotteryGames,
  renderAllResults
}) => {
  // Render the statistics content
  const renderStatistics = () => {
    if (loading) {
      return <LoadingSpinner />;
    }
    
    if (error) {
      return <ErrorMessage message={error} onRetry={updateAfterNewGame} />;
    }
    
    return (
      <div>
        <div className={styles.statBox}>
          <div className={styles.badge}>Game Statistics</div>
          <div className={styles.flexBetween}>
            <span style={{fontWeight: 500, fontSize: '1.125rem'}}>Total Draws:</span>
            <span style={{fontWeight: 600, fontSize: '1.25rem', color: '#01723a'}}>{stats?.totalDraws[selectedGame] || 0}</span>
          </div>
        </div>
        
        {lastUpdated && (
          <p className={styles.infoText} style={{textAlign: 'right'}}>
            Last updated: {lastUpdated.toLocaleString()}
          </p>
        )}
        
        {renderLatestDrawResults()}
        
        <div className={styles.divider}></div>
        
        {renderHotColdNumbers()}
        
        {renderGeneratedNumbers()}
        
        {/* Update Data button */}
        <div style={{marginTop: '1.5rem', textAlign: 'center'}}>
          <button 
            onClick={updateAfterNewGame}
            className={`${styles.button} ${styles.buttonSuccess} ${styles.flexCenter}`}
            style={{gap: '0.5rem', margin: '0 auto'}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/>
            </svg>
            Update Results
          </button>
          
          {renderAllResults()}
        </div>
      </div>
    );
  };
  
  // Render latest draw results
  const renderLatestDrawResults = () => {
    if (!stats?.lastDraw || !stats.lastDraw[selectedGame]) return null;
    
    const lastDraw = stats.lastDraw[selectedGame];
    
    return (
      <div className={styles.generatedBox} style={{marginTop: '1.5rem'}}>
        <div className={styles.badge}>Latest Draw Results</div>
        <p style={{marginBottom: '0.75rem', fontWeight: 500}}>
          {lastDraw.date}
        </p>
        
        <div className={styles.list}>
          {lastDraw.numbers.map((num) => (
            <NumberBall 
              key={`last-${num}`} 
              number={num} 
              type="lastDraw" 
            />
          ))}
          
          {lastDraw.specialNumbers && lastDraw.specialNumbers.length > 0 && (
            <>
              <span style={{alignSelf: 'center', margin: '0 0.25rem', fontWeight: 600}}>+</span>
              {lastDraw.specialNumbers.map((num) => (
                <NumberBall 
                  key={`last-special-${num}`} 
                  number={num} 
                  type="special" 
                />
              ))}
            </>
          )}
        </div>
        
        {lastDraw.jackpot && (
          <p style={{marginTop: '0.75rem', fontSize: '0.875rem', fontWeight: 500}}>
            Jackpot: <span style={{color: '#01723a'}}>{lastDraw.jackpot}</span>
          </p>
        )}
      </div>
    );
  };
  
  // Render hot and cold numbers
  const renderHotColdNumbers = () => {
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
        <div>
          <p style={{marginBottom: '0.5rem', fontWeight: 500}}>Hot Numbers:</p>
          <div className={styles.list}>
            {stats?.hotNumbers[selectedGame]?.map((num) => (
              <NumberBall 
                key={num} 
                number={num} 
                type="hot" 
              />
            )) || <span>No data</span>}
          </div>
        </div>
        <div>
          <p style={{marginBottom: '0.5rem', fontWeight: 500}}>Cold Numbers:</p>
          <div className={styles.list}>
            {stats?.coldNumbers[selectedGame]?.map((num) => (
              <NumberBall 
                key={num} 
                number={num} 
                type="cold" 
              />
            )) || <span>No data</span>}
          </div>
        </div>
      </div>
    );
  };
  
  // Render generated numbers
  const renderGeneratedNumbers = () => {
    if (generatedNumbers.length === 0) return null;
    
    return (
      <div className={styles.generatedBox}>
        <div className={styles.badge}>Your Lucky Numbers</div>
        <p style={{fontWeight: 500, marginBottom: '0.75rem'}}>
          {generatingMethod} for {getSelectedGameConfig().name}
        </p>
        <div className={styles.list}>
          {generatedNumbers.map((num) => (
            <NumberBall 
              key={`main-${num}`} 
              number={num} 
              type="regular" 
            />
          ))}
          
          {generatedSpecialNumbers.length > 0 && (
            <>
              <span style={{alignSelf: 'center', margin: '0 0.5rem', fontWeight: 600}}>+</span>
              {generatedSpecialNumbers.map((num) => (
                <NumberBall 
                  key={`special-${num}`} 
                  number={num} 
                  type="special" 
                />
              ))}
            </>
          )}
        </div>
        <p className={styles.infoText}>
          These numbers were generated using our smart algorithm combining historical data analysis, frequency patterns and probability models.
        </p>
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
        Statistics and Results
      </div>
      
      <div style={{marginBottom: '1.5rem'}}>
        <label htmlFor="gameSelector" style={{display: 'block', marginBottom: '0.75rem', fontWeight: 500}}>
          Select Game:
        </label>
        <select 
          id="gameSelector"
          value={selectedGame} 
          onChange={handleGameChange}
          className={styles.gameSelector}
        >
          {irishLotteryGames.map(game => (
            <option key={game.id} value={game.id}>{game.name}</option>
          ))}
        </select>
        <p className={styles.infoText}>
          {formatGameInfo()}
        </p>
      </div>
  
      {renderStatistics()}
    </div>
  );
};

export default StatisticsCard; 