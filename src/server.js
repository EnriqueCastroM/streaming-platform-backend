import { GraphQLServer } from 'graphql-yoga'

// Resolvers
import resolvers from './graphql/resolvers/index.js'

// Relative path
import path from 'path'
import { fileURLToPath } from 'url'

/* Limitation using type:module this is a hijack solution */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = new GraphQLServer({
  // Type Defs
  typeDefs: path.join(__dirname, 'graphql/schema.graphql'),
  // Resolvers
  resolvers
})

export default server
