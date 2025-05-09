import { prisma } from './prisma';

// Inicialização do banco de dados não é necessária com Prisma
// O Prisma gerencia a estrutura do banco de dados através do schema.prisma

// Funções auxiliares para Draw
export const Draw = {
  // Encontrar um sorteio pelo número
  findUnique: (drawNumber: number) => {
    return prisma.draw.findUnique({
      where: { drawNumber }
    });
  },
  
  // Criar um novo sorteio
  create: (data: any) => {
    return prisma.draw.create({
      data: {
        drawNumber: data.drawNumber,
        drawDate: data.drawDate,
        numbersJson: data.numbersJson,
        bonusNumber: data.bonusNumber,
        jackpot: data.jackpot,
        winnersCount: data.winnersCount
      }
    });
  },
  
  // Listar todos os sorteios
  findMany: (options: any = {}) => {
    return prisma.draw.findMany({
      orderBy: options.orderBy,
      take: options.take
    });
  },
  
  // Contar sorteios
  count: () => {
    return prisma.draw.count();
  }
};

// Funções auxiliares para Ticket
export const Ticket = {
  // Criar um novo ticket
  create: (data: any) => {
    return prisma.ticket.create({
      data: {
        numbersJson: data.numbersJson,
        algorithm: data.algorithm,
        parametersJson: data.parametersJson || "{}",
        userId: data.userId
      }
    });
  },
  
  // Listar tickets
  findMany: (options: any = {}) => {
    return prisma.ticket.findMany({
      orderBy: options.orderBy,
      take: options.take,
      where: options.where
    });
  }
};

// Funções auxiliares para NumberStats
export const NumberStats = {
  // Encontrar estatísticas de um número
  findUnique: (number: number) => {
    return prisma.numberStats.findUnique({
      where: { number }
    });
  },
  
  // Criar estatísticas para um número
  create: (data: any) => {
    return prisma.numberStats.create({
      data: {
        number: data.number,
        frequency: data.frequency,
        lastAppearance: data.lastAppearance,
        hotColdScore: data.hotColdScore
      }
    });
  },
  
  // Atualizar estatísticas de um número
  update: (number: number, data: any) => {
    return prisma.numberStats.update({
      where: { number },
      data: {
        frequency: data.frequency,
        lastAppearance: data.lastAppearance,
        hotColdScore: data.hotColdScore
      }
    });
  },
  
  // Listar todas as estatísticas
  findMany: (options: any = {}) => {
    return prisma.numberStats.findMany({
      orderBy: options.orderBy
    });
  }
};

// O Prisma já faz a inicialização automática baseada no schema
export default { Draw, Ticket, NumberStats }; 