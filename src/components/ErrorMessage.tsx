import React from 'react';
import { ErrorMessageProps } from '../types/lottery';
import styles from '../styles/lottery.module.css';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className={styles.errorBox}>
      <p className={styles.errorText}>Error loading data: {message}</p>
      <button 
        onClick={onRetry}
        className={`${styles.button} ${styles.buttonWarning}`}
        style={{marginTop: '0.75rem'}}
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage; 