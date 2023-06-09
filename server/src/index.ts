import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import connect from './mongo'
import registerRouter from './routes/register'
import loginRouter from './routes/login'
import favsRouter from './routes/favs'

const app = express()
app.use(cors({
  origin: 'https://cine-y-series.netlify.app',
  credentials: true, // Permite el intercambio de cookies entre dominios
}))
/*app.use(function (_req, res, next) { 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/
app.use(express.json())
dotenv.config()

app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/favs', favsRouter)
app.get('/uptime-robot-check', (_req, res) => {
  res.status(200).send('UptimeRobot check passed');
})

const {
  PORT
} = process.env

app.listen(PORT, async (): Promise<void> => {
  console.log(`Server running on port ${PORT}`)
  await connect()
})