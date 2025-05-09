# Project Architecture

This document provides an overview of the **Nosso Milhão** project structure and its key components. The main application code resides within the `nosmilhionario/` subdirectory.

## Technology Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **Database ORM:** Prisma
- **Database:** SQLite (`nosmilhionario/prisma/dev.db`)
- **Language:** TypeScript

## Directory Structure (Main Application: `./nosmilhionario`)

```
/nosmilhionario
|-- .next/           # Next.js build output
|-- node_modules/    # Dependencies
|-- prisma/          # Prisma schema, migrations, and SQLite DB file
|   |-- schema.prisma
|   |-- migrations/
|   |-- dev.db
|-- public/          # Static assets
|-- src/
|   |-- app/         # Next.js App Router (pages, layouts, API routes)
|   |   |-- api/       # API endpoints (e.g., /lottery/generate)
|   |   |-- components/ # Reusable React components
|   |   |-- lib/       # Utility functions, Prisma client instance
|   |   |-- generators/ # UI page for number generators
|   |   |-- layout.tsx
|   |   |-- page.tsx     # Main dashboard/entry page
|   |-- styles/    # Global styles
|-- scripts/         # Utility scripts (e.g., data fetching/setup)
|-- .env.local       # Environment variables (if needed)
|-- package.json     # Project metadata and dependencies
|-- tsconfig.json    # TypeScript configuration
|-- tailwind.config.js # Tailwind CSS configuration
|-- next.config.ts   # Next.js configuration
|-- ... (other configuration files)
```

*Note: There might be other files/folders in the parent directory (`/`) which seem related but might be from a different context or an earlier version.* 

## Key Components

- **Frontend:** Built with React and Next.js App Router (`nosmilhionario/src/app`). Includes the main dashboard (`page.tsx`) and the generator interface (`generators/page.tsx`). Styled using Tailwind CSS.
- **Backend/API:** Handled by Next.js API routes within `nosmilhionario/src/app/api`. Key endpoint: `/api/lottery/generate` (POST).
- **Database:** SQLite database managed by Prisma (`nosmilhionario/prisma/schema.prisma`). Includes models for Draw, Ticket, NumberStats.
- **Lottery Logic:** Contains API handlers (`nosmilhionario/src/app/api/lottery`), number generation algorithms (within the generate API route), and potentially data fetching/processing scripts (`nosmilhionario/scripts`).