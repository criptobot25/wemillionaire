# We Millionaire

A smart Irish Lottery number generator and analyzer. This web application provides statistical analysis and intelligent number generation for Irish National Lottery games including Lotto, EuroMillions, Daily Million, and EuroDreams.

## Features

- Smart number generation using combined algorithms (Frequency Analysis, Monte Carlo, Markov Chain)
- Live results for all Irish lottery games
- Hot and cold number statistics
- Responsive design for mobile and desktop
- User-friendly interface with game-specific information

## Irish National Lottery Games Supported

- Lotto (6/47)
- EuroMillions (5/50 + 2/12)
- Daily Million (6/39)
- EuroDreams (6/40 + 1/5)
- Lotto 5-4-3-2-1
- EuroMillions Plus

## Technology Stack

- Next.js
- React
- TypeScript
- Prisma (for data persistence)
- Web scraping for lottery results

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wemillionaire.git
   cd wemillionaire
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This project is configured for easy deployment on Vercel.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This website is not affiliated with the Irish National Lottery. It is a tool for statistical analysis and does not guarantee winning numbers. Play the lottery responsibly.

---

Visit: [https://www.wemillionaire.eu](https://www.wemillionaire.eu) 