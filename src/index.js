import './database.js'
import server from './server.js'

server.start({ port: 3000 }, ({ port }) => {
  console.log(`Server is running on PORT ${port}`)
})
