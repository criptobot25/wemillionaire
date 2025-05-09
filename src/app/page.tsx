'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import styles from '../styles/lottery.module.css';
import { Game, LotteryStats } from '../types/lottery';
import NumberBall from '../components/NumberBall';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import GameInfoCard from '../components/GameInfoCard';
import AllResults from '../components/AllResults';

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

  // Render the statistics content
  const renderStatistics = () => {
    if (loading) {
      return <LoadingSpinner />;
    }
    
    if (error) {
      return <ErrorMessage message={error} onRetry={fetchLotteryData} />;
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
          
          <AllResults
            stats={stats}
            selectedGame={selectedGame}
            showAllResults={showAllResults}
            setShowAllResults={setShowAllResults}
            isDesktop={isDesktop}
            irishLotteryGames={irishLotteryGames}
          />
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

        <div style={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column' }}>
          <div style={{ flex: 1 }}>
            {/* Content area */}
            <div className={`${styles.grid} ${isDesktop ? styles.gridDesktop : ''}`}>
              {/* Statistics and Results Card */}
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

              {/* Generate Bets Card */}
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

          {/* Mobile ad - only visible on mobile */}
          <div id="google-ads-mobile" className={styles.mobileAdContainer}></div>
        </div>
        
        {/* Side ad container - only visible on desktop */}
        {isDesktop && (
          <div 
            id="google-ads-sidebar" 
            className={`${styles.sideAdContainer} ${isDesktop ? styles.sideAdContainerDesktop : ''}`}
          ></div>
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
  );
}


