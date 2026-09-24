import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = Number(process.env.PORT ?? 4000);

app.use(
  cors({
    origin: process.env.CLIENT_URL ?? 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(express.json());

app.get('/api/health', async (_request, response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    response.status(200).json({
      status: 'ok',
      service: 'roommatehub-api',
      database: 'connected',
      timestamp: new Date().toISOString(),
    });
  } catch {
    response.status(503).json({
      status: 'error',
      service: 'roommatehub-api',
      database: 'unavailable',
    });
  }
});

app.listen(port, () => {
  console.log(`RoommateHub API listening on http://localhost:${port}`);
});
