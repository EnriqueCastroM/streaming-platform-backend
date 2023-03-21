import './database.js'
import server from './server.js'
const PORT = process.env.PORT || 3000
server.start(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
