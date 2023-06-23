import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const {
  MONGO_DB_URL
} = process.env

async function connect(): Promise<void> {
  const connectionString = MONGO_DB_URL
  try {
    await mongoose.connect(connectionString as string)
    console.log('Db conectada')
  } catch (_error) {
    process.on('uncaughtException', err => {
      console.error(err, 'Uncaught Exception thrown')
      process.exit(1)
    })
  }
}

export default connect