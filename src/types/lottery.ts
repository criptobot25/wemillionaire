// Game configuration interface
export interface Game {
  id: string;
  name: string;
  min: number;
  max: number;
  count: number;
  starsMin?: number;
  starsMax?: number;
  starsCount?: number;
  dreamMin?: number;
  dreamMax?: number;
  dreamCount?: number;
  odds: string;
}

// Result of a lottery draw
export interface GameResult {
  date: string;
  numbers: number[];
  specialNumbers?: number[];
  jackpot?: string;
}

// Statistics for lottery games
export interface LotteryStats {
  totalDraws: Record<string, number>;
  lastDraw: Record<string, GameResult>;
  hotNumbers: Record<string, number[]>;
  coldNumbers: Record<string, number[]>;
}

// Props for LotteryGame component
export interface LotteryGameProps {
  game: Game;
}

// Props for NumberBall component
export interface NumberBallProps {
  number: number;
  type: 'regular' | 'hot' | 'cold' | 'special' | 'lastDraw';
  small?: boolean;
}

// Props for LotteryResult component
export interface LotteryResultProps {
  gameId: string;
  result: GameResult;
  isSelected: boolean;
  totalDraws: number;
}

// Props for GameInfoCard component
export interface GameInfoCardProps {
  type: string;
  title: string;
  description: string;
  details: string[];
}

// Props for StatisticsCard component
export interface StatisticsCardProps {
  selectedGame: string;
  stats: LotteryStats | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  generatedNumbers: number[];
  generatedSpecialNumbers: number[];
  generatingMethod: string | null;
  formatGameInfo: () => string;
  getSelectedGameConfig: () => Game;
  updateAfterNewGame: () => Promise<void>;
  handleGameChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  irishLotteryGames: Game[];
  renderAllResults: () => React.ReactNode;
}

// Props for GeneratorCard component
export interface GeneratorCardProps {
  generateSmartNumbers: () => void;
}

// Props for GameDisplay component
export interface GameDisplayProps {
  isDesktop: boolean;
  irishLotteryGames: Game[];
}

// Props for AllResults component
export interface AllResultsProps {
  stats: LotteryStats | null;
  selectedGame: string;
  showAllResults: boolean;
  setShowAllResults: (show: boolean) => void;
  isDesktop: boolean;
  irishLotteryGames: Game[];
}

// Props for LoadingSpinner component
export interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

// Props for ErrorMessage component
export interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
} 