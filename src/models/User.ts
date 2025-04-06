import mongoose, { Schema } from 'mongoose';
import { IUser } from '@/types';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
})

export const User = mongoose.model<IUser>('User', userSchema);