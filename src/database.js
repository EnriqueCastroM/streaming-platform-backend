import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((db) => {
  return console.log('DB is connected!')
}).catch((err) => console.log(err))
