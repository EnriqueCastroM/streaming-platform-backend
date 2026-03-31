// src/seedUser.js
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import User from './models/User.js'

dotenv.config()
await mongoose.connect(process.env.URI)

const hashed = await bcrypt.hash('123456', 10)

await User.deleteMany({ email: 'admin@admin.com' }) // limpia duplicados
await User.create({
  email: 'admin@admin.com',
  password: hashed
})

console.log('✅ Demo user created with bcrypt')
process.exit(0)
