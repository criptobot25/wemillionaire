import React from 'react';
import { AllResultsProps } from '../types/lottery';
import LotteryResult from './LotteryResult';
import styles from '../styles/lottery.module.css';

const AllResults: React.FC<AllResultsProps> = ({ 
  stats,
  selectedGame,
  showAllResults, 
  setShowAllResults,
  isDesktop,
  irishLotteryGames
}) => {
  if (!stats?.lastDraw) return null;
  
  return (
    <div className={styles.generatedBox} style={{marginTop: '2rem'}}>
      <div className={styles.flexBetween} style={{marginBottom: '1rem'}}>
        <div className={styles.badge}>All Game Results</div>
        <button 
          onClick={() => setShowAllResults(!showAllResults)} 
          className={`${styles.button} ${styles.buttonPrimary}`}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '0.875rem',
            backgroundColor: showAllResults ? '#64748b' : '#01723a'
          }}
        >
          {showAllResults ? 'Hide Results' : 'Show All Results'}
        </button>
      </div>
      
      {showAllResults && (
        <div className={styles.grid} style={isDesktop ? {gridTemplateColumns: '1fr 1fr', gap: '1.5rem'} : {}}>
          {Object.entries(stats.lastDraw).map(([gameId, gameData]) => {
            const game = irishLotteryGames.find(g => g.id === gameId);
            if (!game) return null;
            
            return (
              <LotteryResult
                key={gameId}
                gameId={game.name}
                result={gameData}
                isSelected={gameId === selectedGame}
                totalDraws={stats.totalDraws[gameId] || 0}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllResults; 