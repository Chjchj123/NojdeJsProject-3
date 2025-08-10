/* eslint-disable no-console */
import express from 'express'
const db = require('~/config/mongodb.js')
const { env } = require('~/config/environment.js')
const { V1Routes } = require('~/routes/v1/index.js')

const startServer = () => {

  const app = express()

  app.use(express.json())
  app.use('/v1', V1Routes)

  app.get('/', async (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(env.PORT, env.HOSTNAME, () => {

    console.log(`Running at http://${env.HOSTNAME}:${env.PORT}/ , Hello ${env.AUTHOR}`)
  })
}
// Connect to MongoDB

console.log('Connecting to MongoDB...')
db.connectToMongoDB()
  .then(() => {
    console.log('Connected to MongoDB successfully')
  }).then(() => {
    startServer()
  }
  ).catch((err) => {
    console.error('Failed to connect to MongoDB:', err)
    process.exit(0)
  });