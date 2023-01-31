import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';
import connectDB from './src/config/db.js'
import { authRoutes, adminRoutes, contractorRoutes,distributorRoutes } from './src/services/index.js';
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }));

// CORS Policy
app.use(cors())

// Database Connection
connectDB()

// JSON
app.use(express.json())

// Load Routes
app.use("/api/auth", authRoutes)
app.use("/api/admin/", adminRoutes)
app.use("/api/contractor/", contractorRoutes)
app.use("/api/distributor/",distributorRoutes)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})