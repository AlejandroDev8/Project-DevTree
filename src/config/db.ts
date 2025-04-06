import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const {connection} = await mongoose.connect(process.env.MONGO_URI as string)
    const url = `${connection.host}:${connection.port}`
    console.log(`MongoDB connected: ${url}`)
  } catch (error) {
    console.log('MongoDB connection error:', error)
    process.exit(1)
  }
}