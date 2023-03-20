import Movie from '../../models/Movie.js'

const Mutation = {
  async createMovie (_, { title, description, likes, image, dateOfReleased }) {
    const newMovie = { title, description, likes, image, dateOfReleased }
    return await Movie.create(newMovie)
  },
  async updateMovie (_, { _id, title, description, likes, image, dateOfReleased }) {
    const movie = { title, description, likes, image, dateOfReleased }
    return await Movie.findByIdAndUpdate(_id, movie, { new: true })
  },
  async deleteMovie (_, { _id }) {
    await Movie.findByIdAndDelete(_id)
    return await Movie.find()
  }
}

export default Mutation
