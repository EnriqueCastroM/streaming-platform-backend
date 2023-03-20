import Movie from '../../models/Movie.js'
import User from '../../models/User.js'

const Query = {
  async getMovies () {
    const movies = await Movie.find()
    return movies
  },
  async login (_, { email, password }) {
    let message
    const verifyUser = await User.find({ email, password })
    if (verifyUser.length > 0) {
      message = 'Ok User'
    } else {
      message = 'Bad User'
    }
    return message
  }
}

export default Query
