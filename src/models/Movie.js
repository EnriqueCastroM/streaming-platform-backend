import { Schema, model } from 'mongoose'

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    required: true
  },
  dateOfReleased: {
    type: Date,
    required: true
  }
})

export default model('Movie', movieSchema)
