import express from 'express';
import 'dotenv/config';
import { router } from '@/routes/router';
import { connectDB } from '@/config/db';

export const app = express();
connectDB();

app.use(express.json());

app.use('/', router)
