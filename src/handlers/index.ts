import type {Request, Response} from 'express';
import { User } from "@/models/User";

export const createAccount = async (req: Request, res: Response) => {
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
}