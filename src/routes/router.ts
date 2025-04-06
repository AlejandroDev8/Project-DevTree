import { User } from "@/models/User";
import { Router } from "express";

export const router = Router();

router.post('/auth/register', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.json({
      status: 200,
      message: "User registered successfully"
    });
  } catch (error) {
    res.json({
      status: 500,
      message: "Error registering user",
    });
  }
})