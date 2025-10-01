require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const rateLimit = require("express-rate-limit")
const auth = require("./features/auth/route")

const app = express()

// CORS setup
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// Global rate limiter (less strict)
const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { error: "Too many requests, try again later" }
})
app.use(globalLimiter)

// Middleware
app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/auth", auth)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`))
