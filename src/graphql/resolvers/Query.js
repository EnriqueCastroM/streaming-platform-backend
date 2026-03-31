import Movie from '../../models/Movie.js'
import User from '../../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const Query = {
  async getMovies () {
    const movies = await Movie.find()
    return movies
  },
  async login (_, { email, password }) {
    
      const user = await User.findOne({ email })
      if (!user) return null

      const ok = await bcrypt.compare(password, user.password)
      if (!ok) return null

      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,

        { expiresIn: '7d' }
      ) 
      return token
              console.log('LOGIN EMAIL:', email)
        console.log('DB HASH:', user?.password)
        console.log('PLAIN PASS:', password)
  }
  
}





export default Query

