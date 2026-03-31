import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Movie from './models/Movie.js'

dotenv.config()

const movies = [
  {
    title: 'The Matrix',
    description: 'A hacker discovers that reality is a simulation and joins a rebellion.',
    likes: 15,
    image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    dateOfReleased: '1999-03-31'
  },
  {
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology.',
    likes: 20,
    image: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    dateOfReleased: '2010-07-16'
  },
  {
    title: 'Interstellar',
    description: 'A team travels through a wormhole in space to save humanity.',
    likes: 25,
    image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    dateOfReleased: '2014-11-07'
  },
  {
    title: 'The Dark Knight',
    description: 'Batman faces the Joker, a criminal mastermind.',
    likes: 30,
    image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    dateOfReleased: '2008-07-18'
  },
  {
    title: 'Avatar',
    description: 'A marine on an alien planet becomes torn between orders and morality.',
    likes: 18,
    image: 'https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRQnFfid4aR.jpg',
    dateOfReleased: '2009-12-18'
  },
  {
    title: 'Gladiator',
    description: 'A betrayed Roman general seeks revenge.',
    likes: 22,
    image: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    dateOfReleased: '2000-05-05'
  },
  {
    title: 'Fight Club',
    description: 'An insomniac office worker forms an underground fight club.',
    likes: 19,
    image: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
    dateOfReleased: '1999-10-15'
  },
  {
    title: 'Forrest Gump',
    description: 'The life journey of a kind-hearted man with low IQ.',
    likes: 28,
    image: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    dateOfReleased: '1994-07-06'
  },
  {
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over several years.',
    likes: 35,
    image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    dateOfReleased: '1994-09-23'
  },
  {
    title: 'Pulp Fiction',
    description: 'The lives of criminals intertwine in tales of violence.',
    likes: 27,
    image: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    dateOfReleased: '1994-10-14'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    description: 'Hobbits begin a quest to destroy a powerful ring.',
    likes: 40,
    image: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    dateOfReleased: '2001-12-19'
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    description: 'The fellowship is broken but the journey continues.',
    likes: 38,
    image: 'https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
    dateOfReleased: '2002-12-18'
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    description: 'The final battle for Middle-earth.',
    likes: 45,
    image: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    dateOfReleased: '2003-12-17'
  },
  {
    title: 'Titanic',
    description: 'A romance aboard the ill-fated RMS Titanic.',
    likes: 23,
    image: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    dateOfReleased: '1997-12-19'
  },
  {
    title: 'Jurassic Park',
    description: 'Dinosaurs are brought back to life with catastrophic results.',
    likes: 21,
    image: 'https://image.tmdb.org/t/p/w500/c414cDeQ9b6qLPLeKmiJuLDUREJ.jpg',
    dateOfReleased: '1993-06-11'
  },
  {
    title: 'The Avengers',
    description: 'Earth’s mightiest heroes must come together.',
    likes: 33,
    image: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    dateOfReleased: '2012-05-04'
  },
  {
    title: 'Iron Man',
    description: 'A billionaire builds a high-tech suit to escape captivity.',
    likes: 17,
    image: 'https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
    dateOfReleased: '2008-05-02'
  },
  {
    title: 'Spider-Man: No Way Home',
    description: 'Spider-Man faces villains from other universes.',
    likes: 36,
    image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    dateOfReleased: '2021-12-17'
  },
  {
    title: 'Dune',
    description: 'A noble family becomes embroiled in a war over a desert planet.',
    likes: 24,
    image: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
    dateOfReleased: '2021-10-22'
  },
  {
    title: 'Blade Runner 2049',
    description: 'A new blade runner uncovers a secret that could plunge society into chaos.',
    likes: 16,
    image: 'https://image.tmdb.org/t/p/w500/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg',
    dateOfReleased: '2017-10-06'
  }
]

const runSeed = async () => {
  try {
    await mongoose.connect(process.env.URI)

    console.log('✅ Connected to MongoDB')

    await Movie.deleteMany()
    console.log('🗑️ Existing movies removed')

    await Movie.insertMany(movies)
    console.log(`🎬 ${movies.length} movies inserted`)

    process.exit(0)
  } catch (error) {
    console.error('❌ Seed error:', error)
    process.exit(1)
  }
}

runSeed()