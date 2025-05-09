# Setup and Installation

This document describes how to set up the **Nosso Milhão** project environment, focusing on the code within the `nosmilhionario/` directory.

## Prerequisites

- Node.js (version 18 or higher recommended for Next.js 14+)
- npm or yarn

## Installation Steps

1. Clone the repository (if not already done):
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the main project directory:
   ```bash
   cd nosmilhionario
   ```
3. Install dependencies:
   ```bash
   npm install
   # or yarn install
   ```
4. Set up the database (SQLite):
   - The database file is located at `nosmilhionario/prisma/dev.db`.
   - Ensure the schema (`nosmilhionario/prisma/schema.prisma`) is up-to-date.
   - Apply migrations and create the database if it doesn't exist:
     ```bash
     # Run this from the nosmilhionario directory
     npx prisma migrate dev
     ```
   - (Optional) Seed the database with initial data if a seed script exists:
     ```bash
     # Example command, adjust if needed
     # npx prisma db seed 
     ```

5. Run the development server:
   ```bash
   # Run this from the nosmilhionario directory
   npm run dev
   # or yarn dev
   ```
   The application should be available at `http://localhost:3000` (or the configured port). 