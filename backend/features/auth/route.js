const express = require("express")
const rateLimit = require("express-rate-limit")
const validateRequest = require("../../middleware/validateRequest")
const { signUp, login } = require("./controller")
const { signUpSchema, loginSchema } = require("./validator")
const router = express.Router()

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { error: "Too many requests, try again later" }
})

router.post("/sign-up", authLimiter, validateRequest(signUpSchema), signUp)
router.post("/login", authLimiter, validateRequest(loginSchema), login)

module.exports = router