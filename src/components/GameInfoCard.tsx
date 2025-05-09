import React from 'react';
import { GameInfoCardProps } from '../types/lottery';
import styles from '../styles/lottery.module.css';

const GameInfoCard: React.FC<GameInfoCardProps> = ({ type, title, description, details }) => {
  return (
    <div className={styles.gameCard}>
      <span className={styles.gameCardBadge}>{type}</span>
      <h3 className={styles.gameCardTitle}>{title}</h3>
      <p style={{fontSize: '0.9375rem'}}>{description}</p>
      <ul className={styles.gameCardList} style={{marginTop: '0.75rem', paddingLeft: '1.25rem', fontSize: '0.9375rem'}}>
        {details.map((detail, index) => (
          <li 
            key={`${title}-detail-${index}`} 
            style={{marginBottom: index < details.length - 1 ? '0.5rem' : 0}}
          >
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameInfoCard; 