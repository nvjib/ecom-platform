require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()
const auth = require("./features/auth/route")

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())
app.use("/auth", auth)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`))
