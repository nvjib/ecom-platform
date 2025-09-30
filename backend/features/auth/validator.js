const Joi = require("joi");

// Schema for validating signup requests
const signUpSchema = Joi.object({
    name: Joi.string().min(1).max(20).required().messages({
        "string.base": "Name must be a string",
        "string.empty": "Name cannot be empty",
        "string.min": "Name must at least be 1 character",
        "string.max": "Name cannot exceed 20 characters",
        "any.required": "Name is required"
    }),
    email: Joi.string().email().required().messages({
        "string.base": "Email must be a string",
        "string.empty": "Email cannot be empty",
        "string.email": "Must be a valid email",
        "any.required": "Email is required"
    }),
    password: Joi.string().min(8).required().messages({
        "string.base": "Password must be a string",
        "string.empty": "Password cannot be empty",
        "string.min": "Password must at least be 8 characters",
        "any.required": "Password is required"
    }),
    role: Joi.string().valid("admin", "user").required().messages({
        "string.base": "Role must be a string",
        "string.empty": "Role cannot be empty",
        "any.only": "Role must be either (admin or user)",
        "any.required": "Name is required"
    })
})

// Schema for validating login requests
const loginSchema = Joi.object({
    email: Joi.string().email().trim().required().messages({
        "string.base": "Email must be a string",
        "string.empty": "Email cannot be empty",
        "string.email": "Must be a valid email",
        "any.required": "Email is required"
    }),
    password: Joi.string().trim().min(8).required().messages({
        "string.base": "Password must be a string",
        "string.empty": "Password cannot be empty",
        "string.min": "Password must at least be 8 characters",
        "any.required": "Password is required"
    }),
})

module.exports = {
    signUpSchema,
    loginSchema
}