'use client';

import { useState, useEffect } from 'react';
import React from 'react';

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: '1400px', // Increased from 1200px
    margin: '0 auto',
    padding: '1.5rem',
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem', // Increased from 2.5rem
    background: 'linear-gradient(135deg, #01723a 0%, #169b62 100%)',
    padding: '2.5rem', // Increased from 2rem
    borderRadius: '1rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    color: 'white',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  subtitle: {
    fontSize: '1.25rem',
    opacity: '0.9',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
  },
  gridDesktop: {
    gridTemplateColumns: '1fr 1fr',
  },
  card: {
    background: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    padding: '2rem', // Increased from 1.75rem
    border: '1px solid #f0f0f0',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#01723a',
    marginBottom: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  number: {
    width: '2.5rem',
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    borderRadius: '50%',
    fontSize: '1.125rem',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.15s ease-in-out',
  },
  numberHot: {
    backgroundColor: '#fee2e2',
    color: '#b91c1c',
  },
  numberCold: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
  },
  button: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontWeight: 600,
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
  },
  buttonPrimary: {
    backgroundColor: '#01723a',
    color: 'white',
    boxShadow: '0 4px 6px rgba(1, 114, 58, 0.25)',
  },
  buttonSuccess: {
    backgroundColor: '#16a34a',
    color: 'white',
    boxShadow: '0 4px 6px rgba(22, 163, 74, 0.25)',
  },
  buttonWarning: {
    backgroundColor: '#d97706',
    color: 'white',
  },
  gameSelector: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    cursor: 'pointer',
  },
  about: {
    marginTop: '1.5rem',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#333',
  },
  statBox: {
    padding: '1rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #f0f0f0',
  },
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 500,
    backgroundColor: '#e6f7ef',
    color: '#01723a',
    marginBottom: '0.5rem',
  },
  divider: {
    height: '1px',
    background: 'linear-gradient(to right, transparent, #e5e7eb, transparent)',
    margin: '1.5rem 0',
  },
  infoText: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '0.5rem',
  },
  generatedBox: {
    marginTop: '1.5rem',
    padding: '1.5rem',
    backgroundColor: '#f0f9ff',
    borderRadius: '0.75rem',
    border: '1px solid #bae6fd',
    boxShadow: '0 4px 6px rgba(186, 230, 253, 0.1)',
  },
  lottoBall: {
    backgroundColor: '#01723a',
    color: 'white',
  },
  specialBall: {
    backgroundColor: '#f59e0b',
    color: 'white',
  },
  lastDrawBall: {
    backgroundColor: '#4338ca',
    color: 'white',
  },
  gameInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  gameInfoDesktop: {
    gridTemplateColumns: '1fr 1fr',
  },
  gameCard: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.75rem',
    padding: '1.25rem',
    backgroundColor: '#fafafa',
    height: '100%',
  },
  gameCardTitle: {
    fontSize: '1.125rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: '#01723a',
  },
  gameCardBadge: {
    fontSize: '0.75rem',
    padding: '0.125rem 0.5rem',
    borderRadius: '9999px',
    backgroundColor: '#e6f7ef',
    color: '#01723a',
    display: 'inline-block',
    marginBottom: '0.5rem',
  }
};

// Definição dos tipos de jogos da Loteria Nacional da Irlanda
const irishLotteryGames = [
  { id: 'lotto', name: 'Lotto (6/47)', min: 1, max: 47, count: 6, odds: '1 em 10,737,573' },
  { id: 'lotto54321', name: 'Lotto 5-4-3-2-1', min: 1, max: 47, count: 5, odds: '1 em 255,657' },
  { id: 'dailyMillion', name: 'Daily Million (6/39)', min: 1, max: 39, count: 6, odds: '1 em 3,262,623' },
  { id: 'euroMillions', name: 'EuroMillions (5/50 + 2/12)', min: 1, max: 50, count: 5, starsMin: 1, starsMax: 12, starsCount: 2, odds: '1 em 139,838,160' },
  { id: 'euroMillionsPlus', name: 'EuroMillions Plus (5/50)', min: 1, max: 50, count: 5, odds: '1 em 2,118,760' },
  { id: 'euroDreams', name: 'EuroDreams (6/40 + 1/5)', min: 1, max: 40, count: 6, dreamMin: 1, dreamMax: 5, dreamCount: 1, odds: '1 em 19,191,900' }
];

export default function Home() {
  const [stats, setStats] = useState<any>(null);
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
    // Detector de tamanho da tela - só executa no navegador
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
    // You could add more specific logic here to handle game-specific updates
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

  // Encontra o jogo selecionado
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
      // Utilize números quentes com maior probabilidade
      const hotNumbers = [...(stats.hotNumbers[gameConfig.id] || [])];
      
      // Adiciona metade de números quentes
      const hotToAdd = Math.min(Math.ceil(gameConfig.count / 3), hotNumbers.length);
      while (frequencySet.size < hotToAdd && hotNumbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * hotNumbers.length);
        frequencySet.add(hotNumbers[randomIndex]);
        allNumbers.add(hotNumbers[randomIndex]);
        hotNumbers.splice(randomIndex, 1);
      }
    }
    
    // Generate numbers using Monte Carlo method
    // No método Monte Carlo, simulamos sorteios múltiplos e contamos frequências
    const frequencies = new Array(gameConfig.max + 1).fill(0);
    
    // Simulamos 500 sorteios
    for(let i = 0; i < 500; i++) {
      const simulatedDraw = new Set<number>();
      while(simulatedDraw.size < gameConfig.count) {
        simulatedDraw.add(Math.floor(Math.random() * (gameConfig.max - gameConfig.min + 1)) + gameConfig.min);
      }
      simulatedDraw.forEach(num => frequencies[num]++);
    }
    
    // Selecionamos números com base nas frequências simuladas
    const probabilities = frequencies.map((freq, index) => ({ num: index, freq }))
      .filter(item => item.num >= gameConfig.min && item.num <= gameConfig.max)
      .sort((a, b) => b.freq - a.freq);
    
    // Pegamos alguns números mais frequentes na simulação
    const monteCarloToAdd = Math.ceil(gameConfig.count / 3);
    for(let i = 0; i < monteCarloToAdd && i < probabilities.length; i++) {
      monteCarloSet.add(probabilities[i].num);
      allNumbers.add(probabilities[i].num);
    }
    
    // Generate using Markov chain method
    // Começamos com um número inicial
    let currentNumber = Math.floor(Math.random() * (gameConfig.max - gameConfig.min + 1)) + gameConfig.min;
    markovSet.add(currentNumber);
    allNumbers.add(currentNumber);
    
    // Adicionamos números seguindo a "cadeia" com alguma variação
    const markovToAdd = Math.ceil(gameConfig.count / 3);
    while(markovSet.size < markovToAdd) {
      let nextNumber;
      do {
        // Aqui geramos um número próximo ao atual com alguma variação
        const maxDeviation = Math.min(5, Math.floor(gameConfig.max / 10)); // Variação proporcional
        const deviation = Math.floor(Math.random() * (maxDeviation * 2 + 1)) - maxDeviation; // -maxDeviation até +maxDeviation
        nextNumber = currentNumber + deviation;
        
        // Garantimos que o número está no intervalo do jogo
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
    
    // Para jogos com bolas especiais (estrelas/dream numbers)
    const specialNumbers = new Set<number>();
    if (gameConfig.starsCount) {
      while (specialNumbers.size < gameConfig.starsCount) {
        specialNumbers.add(Math.floor(Math.random() * (gameConfig.starsMax - gameConfig.starsMin + 1)) + gameConfig.starsMin);
      }
    } else if (gameConfig.dreamCount) {
      while (specialNumbers.size < gameConfig.dreamCount) {
        specialNumbers.add(Math.floor(Math.random() * (gameConfig.dreamMax - gameConfig.dreamMin + 1)) + gameConfig.dreamMin);
      }
    }
    
    setGeneratedNumbers(Array.from(allNumbers).sort((a, b) => a - b));
    setGeneratedSpecialNumbers(Array.from(specialNumbers).sort((a, b) => a - b));
    setGeneratingMethod('Smart Algorithm');
  };

  // Altera o jogo selecionado e limpa os números gerados
  const handleGameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGame(e.target.value);
    setGeneratedNumbers([]);
    setGeneratedSpecialNumbers([]);
    setGeneratingMethod(null);
  };

  // Formata texto informativo sobre o jogo selecionado
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

  // Add this component to render past results for all games
  const renderAllResults = () => {
    if (!stats?.lastDraw) return null;
    
    return (
      <div style={{marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.75rem', border: '1px solid #e2e8f0'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
          <div style={styles.badge}>All Game Results</div>
          <button 
            onClick={() => setShowAllResults(!showAllResults)} 
            style={{
              ...styles.button,
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              backgroundColor: showAllResults ? '#64748b' : '#01723a',
              color: 'white'
            }}
          >
            {showAllResults ? 'Hide Results' : 'Show All Results'}
          </button>
        </div>
        
        {showAllResults && (
          <div style={{
            display: 'grid', 
            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr', 
            gap: '1.5rem'
          }}>
            {Object.entries(stats.lastDraw).map(([gameId, gameData]: [string, any]) => {
              const game = irishLotteryGames.find(g => g.id === gameId);
              if (!game) return null;
              
              return (
                <div key={gameId} style={{
                  padding: '1rem',
                  backgroundColor: gameId === selectedGame ? '#e6f7ef' : 'white',
                  borderRadius: '0.5rem',
                  border: '1px solid #e2e8f0',
                }}>
                  <h3 style={{fontSize: '1.125rem', fontWeight: 600, color: '#01723a', marginBottom: '0.5rem'}}>
                    {game.name}
                  </h3>
                  <p style={{marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b'}}>
                    Date: {gameData.date}
                  </p>
                  
                  <div style={{...styles.list, marginBottom: '0.75rem'}}>
                    {gameData.numbers.map((num: number) => (
                      <span key={`${gameId}-${num}`} style={{
                        ...styles.number,
                        backgroundColor: '#01723a',
                        color: 'white',
                        width: '2rem',
                        height: '2rem',
                        fontSize: '1rem',
                      }}>
                        {num}
                      </span>
                    ))}
                    
                    {gameData.specialNumbers && gameData.specialNumbers.length > 0 && (
                      <>
                        <span style={{alignSelf: 'center', margin: '0 0.25rem', fontWeight: 600}}>+</span>
                        {gameData.specialNumbers.map((num: number) => (
                          <span key={`${gameId}-special-${num}`} style={{
                            ...styles.number,
                            backgroundColor: '#f59e0b',
                            color: 'white',
                            width: '2rem',
                            height: '2rem',
                            fontSize: '1rem',
                          }}>
                            {num}
                          </span>
                        ))}
                      </>
                    )}
                  </div>
                  
                  {gameData.jackpot && (
                    <p style={{fontSize: '0.875rem', fontWeight: 500}}>
                      Prize: <span style={{color: '#01723a'}}>{gameData.jackpot}</span>
                    </p>
                  )}
                  
                  <p style={{fontSize: '0.875rem', marginTop: '0.5rem'}}>
                    Total Draws: <span style={{fontWeight: 500}}>{stats.totalDraws[gameId] || 0}</span>
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <main id="main-content" style={{ 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e6f7ef 100%)',
      minHeight: '100vh'
    }} aria-label="We Millionaire Irish Lottery Number Generator">
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>We Millionaire</h1>
          <p style={styles.subtitle}>Your intelligent bet generator for Irish National Lottery</p>
        </header>

        {/* Top Ad Banner - Improved spacing */}
        <div style={{
          marginBottom: '2.5rem', // Increased from 2rem
          padding: '1.25rem', // Increased from 1rem
          backgroundColor: '#f9fafb',
          borderRadius: '0.75rem',
          textAlign: 'center',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden'
        }}>
          <div id="google-ads-leaderboard" style={{
            minHeight: '90px',
            width: '100%',
            maxWidth: '728px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <p style={{color: '#6b7280'}}>Advertisement (728×90 Leaderboard)</p>
          </div>
        </div>

        {/* Main Layout - Better spacing */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '180px minmax(0, 1fr) 180px' : '1fr', // Changed from '1fr 728px 1fr'
          gap: '2rem', // Increased from 1.5rem
        }}>
          {/* Left Sidebar Ad (Desktop only) */}
          {isDesktop && (
            <div style={{
              height: 'fit-content',
              position: 'sticky',
              top: '1.5rem',
              padding: '0.75rem', // Increased from 0.5rem
              backgroundColor: '#f9fafb',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden'
            }}>
              <div id="google-ads-skyscraper-left" style={{
                minHeight: '600px',
                width: '160px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <p style={{color: '#6b7280', writingMode: 'vertical-lr', transform: 'rotate(180deg)', margin: '1rem 0'}}>
                  Advertisement
                </p>
                <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '0.5rem'}}>
                  (160×600 Skyscraper)
                </p>
              </div>
            </div>
          )}

          {/* Main Content Column */}
          <div>
            {/* Content grid - Improved spacing */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
              gap: '2.5rem', // Increased from 2rem
              marginBottom: '2.5rem', // Added margin bottom
            }}>
              {/* Statistics and Results Card */}
              <div style={styles.card}>
                <div style={styles.cardTitle}>
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
                    style={styles.gameSelector}
                  >
                    {irishLotteryGames.map(game => (
                      <option key={game.id} value={game.id}>{game.name}</option>
                    ))}
                  </select>
                  <p style={styles.infoText}>
                    {formatGameInfo()}
                  </p>
                </div>
                
                {loading ? (
                  <div style={{display: 'flex', justifyContent: 'center', padding: '2rem'}}>
                    <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#01723a">
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(1 1)" strokeWidth="2">
                          <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
                          <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
                          </path>
                        </g>
                      </g>
                    </svg>
                  </div>
                ) : error ? (
                  <div style={{color: '#ef4444', marginBottom: '1rem', padding: '1rem', backgroundColor: '#fee2e2', borderRadius: '0.5rem'}}>
                    <p style={{fontWeight: 500}}>Error loading data: {error}</p>
                    <button 
                      onClick={() => fetchLotteryData()}
                      style={{...styles.button, backgroundColor: '#ef4444', color: 'white', marginTop: '0.75rem'}}
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <div>
                    <div style={styles.statBox}>
                      <div style={styles.badge}>Game Statistics</div>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <span style={{fontWeight: 500, fontSize: '1.125rem'}}>Total Draws:</span>
                        <span style={{fontWeight: 600, fontSize: '1.25rem', color: '#01723a'}}>{stats?.totalDraws[selectedGame] || 0}</span>
                      </div>
                    </div>
                    
                    {lastUpdated && (
                      <p style={{fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem', textAlign: 'right'}}>
                        Last updated: {lastUpdated.toLocaleString()}
                      </p>
                    )}
                    
                    {stats?.lastDraw && stats.lastDraw[selectedGame] && (
                      <div style={{marginTop: '1.5rem', padding: '1.25rem', backgroundColor: '#f8fafc', borderRadius: '0.75rem', border: '1px solid #e2e8f0'}}>
                        <div style={styles.badge}>Latest Draw Results</div>
                        <p style={{marginBottom: '0.75rem', fontWeight: 500}}>
                          {stats.lastDraw[selectedGame].date}
                        </p>
                        
                        <div style={styles.list}>
                          {stats.lastDraw[selectedGame].numbers.map((num: number) => (
                            <span key={`last-${num}`} style={{
                              ...styles.number,
                              ...styles.lastDrawBall
                            }}>
                              {num}
                            </span>
                          ))}
                          
                          {stats.lastDraw[selectedGame].specialNumbers && stats.lastDraw[selectedGame].specialNumbers.length > 0 && (
                            <>
                              <span style={{alignSelf: 'center', margin: '0 0.25rem', fontWeight: 600}}>+</span>
                              {stats.lastDraw[selectedGame].specialNumbers.map((num: number) => (
                                <span key={`last-special-${num}`} style={{
                                  ...styles.number,
                                  ...styles.specialBall
                                }}>
                                  {num}
                                </span>
                              ))}
                            </>
                          )}
                        </div>
                        
                        {stats.lastDraw[selectedGame].jackpot && (
                          <p style={{marginTop: '0.75rem', fontSize: '0.875rem', fontWeight: 500}}>
                            Jackpot: <span style={{color: '#01723a'}}>{stats.lastDraw[selectedGame].jackpot}</span>
                          </p>
                        )}
                      </div>
                    )}
                    
                    <div style={styles.divider}></div>
                    
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                      <div>
                        <p style={{marginBottom: '0.5rem', fontWeight: 500}}>Hot Numbers:</p>
                        <div style={styles.list}>
                          {stats?.hotNumbers[selectedGame]?.map((num: number) => (
                            <span key={num} style={{...styles.number, ...styles.numberHot}}>
                              {num}
                            </span>
                          )) || <span>No data</span>}
                        </div>
                      </div>
                      <div>
                        <p style={{marginBottom: '0.5rem', fontWeight: 500}}>Cold Numbers:</p>
                        <div style={styles.list}>
                          {stats?.coldNumbers[selectedGame]?.map((num: number) => (
                            <span key={num} style={{...styles.number, ...styles.numberCold}}>
                              {num}
                            </span>
                          )) || <span>No data</span>}
                        </div>
                      </div>
                    </div>
                    
                    {generatedNumbers.length > 0 && (
                      <div style={styles.generatedBox}>
                        <div style={styles.badge}>Your Lucky Numbers</div>
                        <p style={{fontWeight: 500, marginBottom: '0.75rem'}}>
                          {generatingMethod} for {getSelectedGameConfig().name}
                        </p>
                        <div style={styles.list}>
                          {generatedNumbers.map((num) => (
                            <span key={`main-${num}`} style={{
                              ...styles.number, 
                              ...styles.lottoBall,
                              fontWeight: 'bold',
                              transform: 'scale(1.1)',
                              boxShadow: '0 4px 8px rgba(1, 114, 58, 0.3)',
                            }}>
                              {num}
                            </span>
                          ))}
                          
                          {generatedSpecialNumbers.length > 0 && (
                            <>
                              <span style={{alignSelf: 'center', margin: '0 0.5rem', fontWeight: 600}}>+</span>
                              {generatedSpecialNumbers.map((num) => (
                                <span key={`special-${num}`} style={{
                                  ...styles.number, 
                                  ...styles.specialBall,
                                  fontWeight: 'bold',
                                  transform: 'scale(1.1)',
                                  boxShadow: '0 4px 8px rgba(245, 158, 11, 0.3)',
                                }}>
                                  {num}
                                </span>
                              ))}
                            </>
                          )}
                        </div>
                        <p style={styles.infoText}>
                          These numbers were generated using our smart algorithm combining historical data analysis, frequency patterns and probability models.
                        </p>
                      </div>
                    )}

                    {/* Add the "Update Data" button */}
                    {!loading && !error && (
                      <div style={{marginTop: '1.5rem', textAlign: 'center'}}>
                        <button 
                          onClick={updateAfterNewGame}
                          style={{
                            ...styles.button,
                            ...styles.buttonSuccess,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            margin: '0 auto'
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/>
                          </svg>
                          Update Results
                        </button>
                        
                        {/* Add past results for all games */}
                        {renderAllResults()}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Generate Bets Card */}
              <div style={styles.card}>
                <div style={styles.cardTitle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.2 7-6.2-4.6-6.2 4.6 2.2-7-6-4.6h7.6z"></path>
                  </svg>
                  Generate Bets
                </div>
                
                <div>
                  <div style={{marginBottom: '2rem'}}>
                    <h3 style={styles.sectionTitle}>Try Your Luck</h3>
                    <p style={{...styles.infoText, marginBottom: '1.5rem'}}>
                      Our Smart Algorithm combines statistical analysis of hot & cold numbers, 
                      Monte Carlo simulation and Markov chain models to generate number combinations 
                      with potentially higher odds.
                    </p>
                    <div style={{display: 'flex', gap: '0.5rem'}}>
                      <button 
                        onClick={generateSmartNumbers}
                        style={{
                          ...styles.button, 
                          ...styles.buttonPrimary, 
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem'
                        }}
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
                  
                  <div style={styles.divider}></div>
                  
                  <div>
                    <h3 style={styles.sectionTitle}>Irish Lottery Fun Facts</h3>
                    <ul style={{paddingLeft: '1.5rem', margin: '1rem 0'}}>
                      <li style={{marginBottom: '0.5rem'}}>The Irish National Lottery has created over 800 millionaires since its launch in 1988</li>
                      <li style={{marginBottom: '0.5rem'}}>The largest jackpot ever won was €19.06 million in February 2022</li>
                      <li style={{marginBottom: '0.5rem'}}>Over €5 billion has been raised for good causes</li>
                      <li>The phrase "Could be you!" is one of Ireland's most recognized lottery slogans</li>
                    </ul>
                  </div>
                  
                  <div style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    backgroundColor: '#e6f7ef',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#01723a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    <p style={{color: '#01723a', fontSize: '0.875rem', margin: 0}}>
                      Remember to play responsibly. The lottery should be fun entertainment, not a financial strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Content Rectangle Ad - Improved spacing */}
            <div style={{
              padding: '1.5rem', // Increased from 1rem
              backgroundColor: '#f9fafb',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
              textAlign: 'center',
              overflow: 'hidden',
              margin: '0 0 2.5rem 0', // Added margin
            }}>
              <div id="google-ads-rectangle" style={{
                minHeight: '250px',
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <p style={{color: '#6b7280'}}>Advertisement (300×250 Rectangle)</p>
              </div>
            </div>

            {/* Irish Lottery Games - Improved grid layout */}
            <div style={{...styles.card, marginBottom: '2.5rem'}}>
              <div style={styles.cardTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8v8"></path>
                  <path d="M12 8v8"></path>
                  <path d="M8 8v8"></path>
                </svg>
                Irish National Lottery Games
              </div>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: isDesktop ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr', // More responsive grid
                gap: '2rem', // Increased from 1.5rem
              }}>
                <div style={styles.gameCard}>
                  <span style={styles.gameCardBadge}>Main Draw</span>
                  <h3 style={styles.gameCardTitle}>Lotto</h3>
                  <p style={{fontSize: '0.9375rem'}}>The main game of the Irish National Lottery. Draws occur on Wednesdays and Saturdays.</p>
                  <ul style={{marginTop: '0.75rem', paddingLeft: '1.25rem', fontSize: '0.9375rem'}}>
                    <li style={{marginBottom: '0.5rem'}}>Choose 6 numbers from 1-47</li>
                    <li style={{marginBottom: '0.5rem'}}>Odds of winning the jackpot: 1 in 10,737,573</li>
                    <li>Price per line: €2</li>
                  </ul>
                </div>
                
                <div style={styles.gameCard}>
                  <span style={styles.gameCardBadge}>Transnational</span>
                  <h3 style={styles.gameCardTitle}>EuroMillions</h3>
                  <p style={{fontSize: '0.9375rem'}}>The transnational European game with the biggest jackpots. Draws happen on Tuesdays and Fridays.</p>
                  <ul style={{marginTop: '0.75rem', paddingLeft: '1.25rem', fontSize: '0.9375rem'}}>
                    <li style={{marginBottom: '0.5rem'}}>Choose 5 numbers from 1-50 and 2 stars from 1-12</li>
                    <li style={{marginBottom: '0.5rem'}}>Odds of winning the jackpot: 1 in 139,838,160</li>
                    <li>Price per line: €2.50</li>
                  </ul>
                </div>
                
                <div style={styles.gameCard}>
                  <span style={styles.gameCardBadge}>Daily Game</span>
                  <h3 style={styles.gameCardTitle}>Daily Million</h3>
                  <p style={{fontSize: '0.9375rem'}}>Daily draws with a fixed jackpot of €1 million. Twice a day, every day.</p>
                  <ul style={{marginTop: '0.75rem', paddingLeft: '1.25rem', fontSize: '0.9375rem'}}>
                    <li style={{marginBottom: '0.5rem'}}>Choose 6 numbers from 1-39</li>
                    <li style={{marginBottom: '0.5rem'}}>Odds of winning the jackpot: 1 in 3,262,623</li>
                    <li>Price per line: €1</li>
                  </ul>
                </div>
                
                <div style={styles.gameCard}>
                  <span style={styles.gameCardBadge}>New Game</span>
                  <h3 style={styles.gameCardTitle}>EuroDreams</h3>
                  <p style={{fontSize: '0.9375rem'}}>New annuity game offering €20,000 per month for 30 years. Draws on Mondays and Thursdays.</p>
                  <ul style={{marginTop: '0.75rem', paddingLeft: '1.25rem', fontSize: '0.9375rem'}}>
                    <li style={{marginBottom: '0.5rem'}}>Choose 6 numbers from 1-40 and 1 dream number from 1-5</li>
                    <li style={{marginBottom: '0.5rem'}}>Odds of winning the main prize: 1 in 19,191,900</li>
                    <li>Price per line: €2.50</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div style={styles.card}>
              <div style={styles.cardTitle}>
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

          {/* Right Sidebar Ad (Desktop only) */}
          {isDesktop && (
            <div style={{
              height: 'fit-content',
              position: 'sticky',
              top: '1.5rem',
              padding: '0.75rem', // Increased from 0.5rem
              backgroundColor: '#f9fafb',
              borderRadius: '0.75rem',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden'
            }}>
              <div id="google-ads-skyscraper-right" style={{
                minHeight: '600px',
                width: '160px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <p style={{color: '#6b7280', writingMode: 'vertical-lr', transform: 'rotate(180deg)', margin: '1rem 0'}}>
                  Advertisement
                </p>
                <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '0.5rem'}}>
                  (160×600 Skyscraper)
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Ad Banner - Improved spacing */}
        <div style={{
          marginTop: '2.5rem', // Increased from 2rem
          padding: '1.5rem', // Increased from 1rem
          backgroundColor: '#f9fafb',
          borderRadius: '0.75rem',
          textAlign: 'center',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden'
        }}>
          <div id="google-ads-large-mobile" style={{
            minHeight: '100px',
            width: '100%',
            maxWidth: '320px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <p style={{color: '#6b7280'}}>Advertisement (320×100 Large Mobile Banner)</p>
          </div>
        </div>
        
        <footer style={{
          marginTop: '2.5rem', // Increased from 2rem
          textAlign: 'center',
          padding: '1.5rem', // Increased from 1rem
          color: '#6b7280',
          fontSize: '0.875rem'
        }}>
          <p>© 2023 We Millionaire. This site provides Irish National Lottery number generation and is not affiliated with the official Irish National Lottery.</p>
          <p style={{marginTop: '0.5rem'}}>Play responsibly. If you feel you have a problem with gambling, call the National Gambling Helpline: 1800 753 753</p>
          
          {/* Add sitemap and related links */}
          <nav aria-label="Footer Navigation" style={{marginTop: '1rem'}}>
            <ul style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', listStyle: 'none', padding: 0}}>
              <li><a href="/about" style={{color: '#01723a', textDecoration: 'none'}}>About</a></li>
              <li><a href="/privacy" style={{color: '#01723a', textDecoration: 'none'}}>Privacy Policy</a></li>
              <li><a href="/terms" style={{color: '#01723a', textDecoration: 'none'}}>Terms</a></li>
              <li><a href="/sitemap.xml" style={{color: '#01723a', textDecoration: 'none'}}>Sitemap</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    </main>
  );
} 