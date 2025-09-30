require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const auth = require("./features/auth/route")

app.use(express.json())
app.use(cors())
app.use("/auth", auth)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`))
