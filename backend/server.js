import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import authRoutes from './routes/auth.js'
import petRoutes from './routes/pets.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(helmet())
app.use(cors())
app.use(express.json())

// 👇 THIS IS THE LINE I CHANGED FOR YOU
app.get('/', (req, res) => res.send('Pets CRUD API is running!'))

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/pets', petRoutes)

// connect DB and start
connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
}).catch(err => {
  console.error('Startup failed', err)
})