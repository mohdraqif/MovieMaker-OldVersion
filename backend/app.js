const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {graphqlHTTP} = require('express-graphql')
const movieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')
const cors = require('cors')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex:true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected!'))
.catch((err) => console.log('Error', err)) 


app.use(cors())
// Setting GraphQL
app.use('/graphql', graphqlHTTP({
  schema: movieSchema,
  graphiql: true,
  rootValue: resolvers
}))


app.get('/', (req, res) => {
  res.send('Hello from backend app.js')
})

app.listen(4000, () => {
  console.log('Server on port 4000')
})