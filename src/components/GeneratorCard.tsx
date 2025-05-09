import React from 'react';
import styles from '../styles/lottery.module.css';
import { GeneratorCardProps } from '../types/lottery';

const GeneratorCard: React.FC<GeneratorCardProps> = ({
  generateSmartNumbers
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.2 7-6.2-4.6-6.2 4.6 2.2-7-6-4.6h7.6z"></path>
        </svg>
        Generate Bets
      </div>
      
      <div>
        <div style={{marginBottom: '2rem'}}>
          <h3 className={styles.sectionTitle}>Try Your Luck</h3>
          <p className={styles.infoText} style={{marginBottom: '1.5rem'}}>
            Our Smart Algorithm combines statistical analysis of hot & cold numbers, 
            Monte Carlo simulation and Markov chain models to generate number combinations 
            with potentially higher odds.
          </p>
          <div style={{display: 'flex', gap: '0.5rem'}}>
            <button 
              onClick={generateSmartNumbers}
              className={`${styles.button} ${styles.buttonPrimary} ${styles.flexCenter}`}
              style={{flex: 1, gap: '0.5rem'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v8"></path>
                <path d="M8 12h8"></path>
              </svg>
              Generate Smart Numbers
            </button>
          </div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div>
          <h3 className={styles.sectionTitle}>Irish Lottery Fun Facts</h3>
          <ul style={{paddingLeft: '1.5rem', margin: '1rem 0'}}>
            <li style={{marginBottom: '0.5rem'}}>The Irish National Lottery has created over 800 millionaires since its launch in 1988</li>
            <li style={{marginBottom: '0.5rem'}}>The largest jackpot ever won was €19.06 million in February 2022</li>
            <li style={{marginBottom: '0.5rem'}}>Over €5 billion has been raised for good causes</li>
            <li>The phrase "Could be you!" is one of Ireland's most recognized lottery slogans</li>
          </ul>
        </div>
        
        <div className={styles.warningBox}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#01723a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <p className={styles.warningText}>
            Remember to play responsibly. The lottery should be fun entertainment, not a financial strategy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneratorCard; 