-- CreateTable
CREATE TABLE "Draw" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "drawNumber" INTEGER NOT NULL,
    "drawDate" DATETIME NOT NULL,
    "numbersJson" TEXT NOT NULL,
    "bonusNumber" INTEGER,
    "jackpot" REAL,
    "winnersCount" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numbersJson" TEXT NOT NULL,
    "algorithm" TEXT NOT NULL,
    "parametersJson" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT
);

-- CreateTable
CREATE TABLE "NumberStats" (
    "number" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "frequency" INTEGER NOT NULL DEFAULT 0,
    "lastAppearance" DATETIME,
    "hotColdScore" REAL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Draw_drawNumber_key" ON "Draw"("drawNumber");
