const express = require("express")
const validateRequest = require("../../middleware/validateRequest")
const { signUp } = require("./controller")
const { signUpSchema } = require("./validator")
const router = express.Router()

router.post("/sign-up", validateRequest(signUpSchema), signUp)

module.exports = router