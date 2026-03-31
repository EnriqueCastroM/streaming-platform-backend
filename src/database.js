import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.set('strictQuery', true)

const mongoURI = process.env.URI

if (!mongoURI) {
  console.error('❌ Mongo URI not found in environment variables')
  process.exit(1)
}

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('✅ MongoDB Atlas connected')
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message)
    process.exit(1)
  })