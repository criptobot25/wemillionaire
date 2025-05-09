import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'csv-parse/sync';

// Interfaces para tipagem
interface DrawResult {
  drawNumber: number;
  drawDate: Date;
  numbers: number[];
  bonusNumber: number | null;
  jackpot: number | null;
  winnersCount: number | null;
}

// API route para importar dados de sorteios da loteria de um arquivo CSV
export async function POST(request: NextRequest) {
  try {
    // Verifica se a requisição é multipart form-data
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { success: false, message: 'Nenhum arquivo enviado' },
        { status: 400 }
      );
    }

    // Verifica se é um arquivo CSV
    if (!file.name.endsWith('.csv')) {
      return NextResponse.json(
        { success: false, message: 'O arquivo deve estar no formato CSV' },
        { status: 400 }
      );
    }

    // Lê o conteúdo do arquivo
    const fileContent = await file.text();
    
    // Analisa o CSV
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    });

    console.log(`Analisadas ${records.length} linhas do CSV`);

    // Processa cada linha do CSV
    const drawResults: DrawResult[] = [];
    for (const record of records) {
      try {
        // Extrai número do sorteio e data
        const drawNumber = parseInt(record.drawNumber || record.concurso || record.numero, 10);
        
        // Verifica diferentes formatos de data possíveis
        let drawDate;
        if (record.drawDate) {
          drawDate = new Date(record.drawDate);
        } else if (record.data) {
          // Formato BR: DD/MM/YYYY
          const parts = record.data.split('/');
          if (parts.length === 3) {
            drawDate = new Date(parts[2], parts[1] - 1, parts[0]);
          }
        }
        
        if (!drawDate || isNaN(drawDate.getTime())) {
          drawDate = new Date(); // Usa data atual se não conseguir interpretar
        }

        // Extrai os números - pode estar em diferentes formatos
        let numbers: number[] = [];
        
        // Tenta formato de colunas individuais: numero1, numero2, ...
        if (record.numero1 !== undefined) {
          for (let i = 1; i <= 6; i++) {
            const numField = `numero${i}`;
            if (record[numField] !== undefined) {
              const num = parseInt(record[numField], 10);
              if (!isNaN(num)) {
                numbers.push(num);
              }
            }
          }
        } 
        // Tenta formato de string separada por vírgulas ou espaços
        else if (record.numbers || record.numeros) {
          const numStr = record.numbers || record.numeros;
          numbers = numStr.split(/[,;\s]+/).map((n: string) => parseInt(n.trim(), 10)).filter((n: number) => !isNaN(n));
        }
        
        // Extrai o número da sorte ou número bonus
        let bonusNumber: number | null = null;
        if (record.bonusNumber !== undefined) {
          bonusNumber = parseInt(record.bonusNumber, 10);
        } else if (record.bonus !== undefined) {
          bonusNumber = parseInt(record.bonus, 10);
        } else if (record.numeroSorte !== undefined) {
          bonusNumber = parseInt(record.numeroSorte, 10);
        }

        // Extrai o valor do prêmio (jackpot) se disponível
        let jackpot: number | null = null;
        if (record.jackpot !== undefined) {
          jackpot = parseFloat(record.jackpot.replace(/[^\d.,]/g, '').replace(',', '.'));
        } else if (record.premio !== undefined) {
          jackpot = parseFloat(record.premio.replace(/[^\d.,]/g, '').replace(',', '.'));
        }

        // Extrai a quantidade de ganhadores se disponível
        let winnersCount: number | null = null;
        if (record.winners !== undefined) {
          winnersCount = parseInt(record.winners, 10);
        } else if (record.ganhadores !== undefined) {
          winnersCount = parseInt(record.ganhadores, 10);
        }

        // Valida os dados extraídos
        if (isNaN(drawNumber) || !numbers.length) {
          console.warn(`Pulando sorteio com dados inválidos: ${drawNumber}, ${drawDate}, ${numbers}, ${bonusNumber}`);
          continue;
        }

        // Cria objeto do sorteio
        const draw: DrawResult = {
          drawNumber,
          drawDate,
          numbers,
          bonusNumber,
          jackpot,
          winnersCount
        };

        drawResults.push(draw);
        console.log(`Processado sorteio #${drawNumber}: ${numbers.join(', ')}${bonusNumber ? ' + ' + bonusNumber : ''}`);
      } catch (error: any) {
        console.error(`Erro processando linha do CSV: ${error.message}`);
      }
    }

    // Apenas retorna os resultados processados sem salvar no banco de dados
    return NextResponse.json({
      success: true,
      message: 'Arquivo CSV processado com sucesso',
      totalProcessed: drawResults.length,
      results: drawResults.slice(0, 10) // Retorna apenas os primeiros 10 para demonstração
    });
  } catch (error: any) {
    console.error('Erro importando arquivo CSV:', error);
    return NextResponse.json(
      { success: false, message: 'Falha ao importar arquivo CSV', error: error.message },
      { status: 500 }
    );
  }
} 