import express from 'express' 
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import authRoutes from './routes/auth.js'
import petRoutes from './routes/pets.js'

// Swagger
import { swaggerUi, swaggerSpec } from './swagger.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(helmet())

// --- FIXED CORS CONFIGURATION ---
// This tells the browser: "It's okay to accept requests from anywhere"
app.use(cors({
  origin: "*", // Allow all origins (Localhost + Production)
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}))
// --------------------------------

app.use(express.json())

// Root route
app.get('/', (req, res) => {
  res.send('Pet Adoption API is running!')
})

// Swagger UI route 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// API routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/pets', petRoutes)

// Connect to DB then start server
connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
    console.log(`Swagger Docs → http://localhost:${PORT}/api-docs`)
  })
  .catch(err => {
    console.error("Startup failed", err)
  })