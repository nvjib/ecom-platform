const Joi = require("joi");

const createProductSchema = Joi.object({
    image: Joi.string().trim().uri().required().messages({
        "string.base": "Image must be a string",
        "string.empty": "Image cannot be empty",
        "string.uri": "Image must be a valid URL",
        "any.required": "Image is required"
    }),
    title: Joi.string().trim().max(255).required().messages({
        "string.base": "Title must be a string",
        "string.empty": "Title cannot be empty",
        "string.max": "Title cannot exceed 255 characters",
        "any.required": "Title is required"
    }),
    price: Joi.number().precision(2).min(5).required().messages({
        "number.base": "Price must be a number",
        "number.precision": "Price must have no more than 2 decimal place",
        "number.min": "Price cannot be less than $5",
        "any.required": "Price is required"
    }),
    description: Joi.string().trim().required().messages({
        "string.base": "Description must be a string",
        "string.empty": "Description cannot be empty",
        "any.required": "Description is required"
    }),
    features: Joi.array().items(Joi.string().trim().min(1)).min(1).required().messages({
        "array.base": "Features must be an array",
        "array.min": "Features must at least contain one item",
        "any.required": "Features is required"
    })
})

module.exports = {
    createProductSchema
}
