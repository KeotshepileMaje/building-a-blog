const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
require('dotenv').config()

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        MONGODB_USERNAME: process.env.MONGODB_USERNAME,
        MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
        MONGODB_CLUSTERNAME: process.env.MONGODB_CLUSTERNAME,
        MONGODB_DATABASE: process.env.MONGODB_DATABASE_DEV
      }
    }
  }
  
  return {
    env: {
      MONGODB_USERNAME: process.env.MONGODB_USERNAME,
      MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
      MONGODB_CLUSTERNAME: process.env.MONGODB_CLUSTERNAME,
      MONGODB_DATABASE: process.env.MONGODB_DATABASE
    }
  }
}