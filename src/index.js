import './database.js'
import server from './server.js'
const PORT = process.env.PORT || 3977;

server.start({ PORT }, ({ port }) => {
  console.log(`Server is running on PORT ${PORT}`)
})
