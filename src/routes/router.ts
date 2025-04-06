import { Router } from "express";

export const router = Router();

router.post('/auth/register', (req, res) => {
  console.log(req.body);
})