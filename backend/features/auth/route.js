const express = require("express")
const validateRequest = require("../../middleware/validateRequest")
const { signUp, login } = require("./controller")
const { signUpSchema, loginSchema } = require("./validator")
const router = express.Router()

router.post("/sign-up", validateRequest(signUpSchema), signUp)
router.post("/login", validateRequest(loginSchema), login)

module.exports = router