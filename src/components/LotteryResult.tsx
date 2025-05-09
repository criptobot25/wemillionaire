import React from 'react';
import { LotteryResultProps } from '../types/lottery';
import NumberBall from './NumberBall';
import styles from '../styles/lottery.module.css';

const LotteryResult: React.FC<LotteryResultProps> = ({ gameId, result, isSelected, totalDraws }) => {
  return (
    <div className={`${styles.resultItem} ${isSelected ? styles.resultItemSelected : ''}`}>
      <h3 className={styles.resultTitle}>{gameId}</h3>
      <p className={styles.resultDate}>Date: {result.date}</p>
      
      <div className={styles.list}>
        {result.numbers.map((num) => (
          <NumberBall 
            key={`${gameId}-${num}`} 
            number={num} 
            type="lastDraw" 
            small={true}
          />
        ))}
        
        {result.specialNumbers && result.specialNumbers.length > 0 && (
          <>
            <span style={{alignSelf: 'center', margin: '0 0.25rem', fontWeight: 600}}>+</span>
            {result.specialNumbers.map((num) => (
              <NumberBall 
                key={`${gameId}-special-${num}`} 
                number={num} 
                type="special" 
                small={true}
              />
            ))}
          </>
        )}
      </div>
      
      {result.jackpot && (
        <p className={styles.resultPrize}>
          Prize: <span className={styles.resultPrizeValue}>{result.jackpot}</span>
        </p>
      )}
      
      <p className={styles.resultStats}>
        Total Draws: <span className={styles.resultStatsValue}>{totalDraws || 0}</span>
      </p>
    </div>
  );
};

export default LotteryResult; 