const { MongoClient, ServerApiVersion } = require('mongodb')
const { env } = require('~/config/environment.js')
let mongodbInstance = null

const client = new MongoClient(env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

export const connectToMongoDB = async () => {
    await client.connect()
    mongodbInstance = client.db(env.MONGODB_NAME)
}

export const getMongoDBInstance = () => {
    if (!mongodbInstance) {
        throw new Error('Please connect to MongoDB first!')
    }
    return mongodbInstance
}