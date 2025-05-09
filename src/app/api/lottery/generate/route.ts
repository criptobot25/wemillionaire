import { NextRequest, NextResponse } from 'next/server';

// Constantes para a loteria
const MIN_NUMBER = 1;
const MAX_NUMBER = 47;
const TICKET_SIZE = 6;

/**
 * Gera números aleatórios para apostas de loteria
 */
export async function GET(request: NextRequest) {
  return NextResponse.json({
    success: true,
    message: 'Use POST method to generate numbers'
  });
}

export async function POST(request: Request) {
  try {
    const { algorithm = 'random', parameters = {} } = await request.json();
    
    // Generate 6 unique random numbers
    const numbers = generateRandom();
    
    // Return the ticket data
    return NextResponse.json({
      success: true,
      ticket: {
        id: Date.now(), 
        numbers,
        algorithm
      }
    });
  } catch (error: unknown) {
    console.error('Error generating lottery numbers:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to generate lottery numbers', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

// Generate completely random numbers
function generateRandom(): number[] {
  const numbers: number[] = [];
  while (numbers.length < TICKET_SIZE) {
    const num = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers.sort((a, b) => a - b);
}
