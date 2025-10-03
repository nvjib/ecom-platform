const express = require("express")
const validateRequest = require("../../middleware/validateRequest")
const { createProductSchema } = require("./validator")
const { createProduct } = require("./controller")
const router = express.Router()

router.post("/products", validateRequest(createProductSchema), createProduct)

module.exports = router