import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import connect from './mongo'
import registerRouter from './routes/register'
import loginRouter from './routes/login'
import favsRouter from './routes/favs'

const app = express()
app.use(cors({
  origin: 'https://cine-y-series.onrender.com/',
  credentials: true, // Permite el intercambio de cookies entre dominios
}))
app.use(express.json())
dotenv.config()

app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/favs', favsRouter)
const {
  PORT
} = process.env

app.listen(PORT, async (): Promise<void> => {
  console.log(`Server running on port ${PORT}`)
  await connect()
})