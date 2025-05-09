'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function About() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{ 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e6f7ef 100%)',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1.5rem',
        fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, #01723a 0%, #169b62 100%)',
          padding: '2.5rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          color: 'white',
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          }}>
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="#ffffff" 
              style={{ marginRight: '10px', display: 'inline-block', verticalAlign: 'middle' }}
            >
              <path d="M12,2C9.88,2,8.14,3.74,8.14,5.86c0,0.93,0.47,1.76,1.23,2.24C8.84,7.94,8.34,7.58,7.8,7.58
                c-1.31,0-2.37,1.06-2.37,2.37c0,1.31,1.06,2.37,2.37,2.37c0.53,0,1.03-0.17,1.43-0.5
                c-0.31,0.4-0.5,0.9-0.5,1.43c0,1.31,1.06,2.37,2.37,2.37c1.31,0,2.37-1.06,2.37-2.37
                c0-0.53-0.17-1.03-0.5-1.43c0.4,0.33,0.9,0.5,1.43,0.5c1.31,0,2.37-1.06,2.37-2.37
                c0-1.31-1.06-2.37-2.37-2.37c-0.53,0-1.03,0.17-1.43,0.5c0.33-0.4,0.5-0.9,0.5-1.43
                C14.86,3.74,13.12,2,12,2z M10.57,4.73c0-0.79,0.64-1.43,1.43-1.43
                c0.79,0,1.43,0.64,1.43,1.43c0,0.79-0.64,1.43-1.43,1.43
                C11.21,6.16,10.57,5.52,10.57,4.73z M8.29,8.14c0.79,0,1.43,0.64,1.43,1.43
                c0,0.79-0.64,1.43-1.43,1.43c-0.79,0-1.43-0.64-1.43-1.43
                C6.86,8.78,7.5,8.14,8.29,8.14z M12,14.86c-0.79,0-1.43-0.64-1.43-1.43
                c0-0.79,0.64-1.43,1.43-1.43c0.79,0,1.43,0.64,1.43,1.43
                C13.43,14.22,12.79,14.86,12,14.86z M15.71,10.29c0.79,0,1.43,0.64,1.43,1.43
                c0,0.79-0.64,1.43-1.43,1.43c-0.79,0-1.43-0.64-1.43-1.43
                C14.29,10.93,14.93,10.29,15.71,10.29z M17,16c-0.55,0-1,0.45-1,1v1c0,1.1-0.9,2-2,2h-4
                c-1.1,0-2-0.9-2-2v-1c0-0.55-0.45-1-1-1s-1,0.45-1,1v1c0,2.21,1.79,4,4,4h4
                c2.21,0,4-1.79,4-4v-1C18,16.45,17.55,16,17,16z" 
              />
            </svg>
            About We Millionaire
          </h1>
          <p style={{
            fontSize: '1.25rem',
            opacity: '0.9',
          }}>Your intelligent number generator for Irish National Lottery</p>
        </header>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
          padding: '2rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1.5rem',
          }}>Our Mission</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            We Millionaire was created with a simple mission: to help lottery enthusiasts make smarter choices
            when selecting their numbers for Irish National Lottery games. Combining mathematical algorithms and
            historical data analysis, we provide a unique tool that brings statistical intelligence to lottery gaming.
          </p>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            We believe that lottery games, while fundamentally based on chance, can be approached with strategy by analyzing
            number patterns, frequency distributions, and statistical anomalies.
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
          padding: '2rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1.5rem',
          }}>Our Technology</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            The heart of We Millionaire is our proprietary Smart Algorithm that combines three powerful methodologies:
          </p>
          
          <ul style={{
            marginLeft: '1.5rem',
            marginBottom: '1.5rem',
            lineHeight: '1.7',
            fontSize: '1.1rem',
          }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: '#01723a' }}>Frequency Analysis:</strong> Tracks which numbers appear most often in Irish Lottery draws over time.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: '#01723a' }}>Monte Carlo Simulation:</strong> Runs thousands of virtual draws to identify statistical patterns.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: '#01723a' }}>Markov Chain Modeling:</strong> Analyzes relationships between numbers to detect sequential patterns.
            </li>
          </ul>
          
          <p style={{
            lineHeight: '1.7',
            fontSize: '1.1rem',
          }}>
            This combination of approaches allows us to generate numbers that balance statistical probability with randomness,
            offering a smarter alternative to arbitrary number selection.
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
          padding: '2rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#01723a',
            marginBottom: '1.5rem',
          }}>Responsible Gaming</h2>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            We Millionaire encourages responsible lottery participation. While our tools can help you make more informed choices,
            we remind all users that lottery games are primarily games of chance and should be played for entertainment.
          </p>
          
          <p style={{
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
          }}>
            No system, no matter how sophisticated, can guarantee lottery wins. We recommend setting a budget for lottery gaming
            and never spending more than you can afford to lose.
          </p>
          
          <div style={{
            backgroundColor: '#e6f7ef',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            marginTop: '1.5rem',
          }}>
            <p style={{
              color: '#01723a',
              fontSize: '1.1rem',
              fontWeight: '500',
            }}>
              If you or someone you know has concerns about gambling behavior, please contact the National Gambling Helpline
              at 1800 753 753 for confidential support and advice.
            </p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '2rem 0',
        }}>
          <Link href="/" style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#01723a',
            color: 'white',
            borderRadius: '0.5rem',
            fontWeight: '600',
            textDecoration: 'none',
            boxShadow: '0 4px 6px rgba(1, 114, 58, 0.25)',
          }}>
            Return to Home
          </Link>
        </div>
        
        <footer style={{
          marginTop: '2.5rem',
          textAlign: 'center',
          padding: '1.5rem',
          color: '#6b7280',
          fontSize: '0.875rem'
        }}>
          <p>© 2023 We Millionaire. This site provides Irish National Lottery number generation and is not affiliated with the official Irish National Lottery.</p>
          <p style={{marginTop: '0.5rem'}}>Play responsibly. If you feel you have a problem with gambling, call the National Gambling Helpline: 1800 753 753</p>
          
          <nav aria-label="Footer Navigation" style={{marginTop: '1rem'}}>
            <ul style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', listStyle: 'none', padding: 0}}>
              <li><Link href="/about" style={{color: '#01723a', textDecoration: 'none'}}>About</Link></li>
              <li><Link href="/privacy" style={{color: '#01723a', textDecoration: 'none'}}>Privacy Policy</Link></li>
              <li><Link href="/terms" style={{color: '#01723a', textDecoration: 'none'}}>Terms</Link></li>
              <li><Link href="/sitemap.xml" style={{color: '#01723a', textDecoration: 'none'}}>Sitemap</Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    </main>
  );
} 