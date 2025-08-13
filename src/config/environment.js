require('dotenv').config()

export const env = {
    MONGODB_URI: process.env.MONGODB_URL,
    MONGODB_NAME: process.env.MONGODB_NAME,
    PORT: process.env.PORT || 3000,
    HOSTNAME: process.env.HOSTNAME,
    AUTHOR: process.env.AUTHOR,
    BUILD_MODE: process.env.BUILD_MODE
}
