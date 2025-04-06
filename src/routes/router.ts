import { createAccount } from "@/handlers";
import { Router } from "express";

export const router = Router();

router.post('/auth/register', createAccount)