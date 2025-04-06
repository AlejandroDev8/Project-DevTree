import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const {connection} = await mongoose.connect(process.env.MONGO_URI as string)
    const url = `${connection.host}:${connection.port}`
    console.log(`MongoDB connected: ${url}`)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    } else {
      console.log('An unknown error occurred')
    }
    process.exit(1)
  }
}