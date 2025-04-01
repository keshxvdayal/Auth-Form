import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client"
import authRoutes from "./routes/auth"
import { errorHandler } from "./middleware/errorHandler"

// Load environment variables
dotenv.config()

// Initialize Express app
const app = express()
const PORT = process.env.PORT || 3001

// Initialize Prisma client
export const prisma = new PrismaClient()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)

// Error handling middleware
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// Handle graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect()
  process.exit(0)
})