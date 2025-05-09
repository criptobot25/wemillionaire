import React from 'react';
import { NumberBallProps } from '../types/lottery';
import styles from '../styles/lottery.module.css';

const NumberBall: React.FC<NumberBallProps> = ({ number, type, small = false }) => {
  const getBallStyles = () => {
    const baseStyles = [styles.number];
    
    if (small) {
      baseStyles.push(styles.smallBall);
    }
    
    switch (type) {
      case 'hot':
        baseStyles.push(styles.numberHot);
        break;
      case 'cold':
        baseStyles.push(styles.numberCold);
        break;
      case 'special':
        baseStyles.push(styles.specialBall);
        break;
      case 'lastDraw':
        baseStyles.push(styles.lastDrawBall);
        break;
      default:
        baseStyles.push(styles.lottoBall);
    }
    
    return baseStyles.join(' ');
  };
  
  return (
    <span className={getBallStyles()}>
      {number}
    </span>
  );
};

export default NumberBall; 