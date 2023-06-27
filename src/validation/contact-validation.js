const Joi = require("joi");

const createContactValidation = Joi.object({
    first_name : Joi.string().max(100).required(),
    last_name : Joi.string().max(100).optional(),
    email : Joi.string().max(200).email().optional(),
    phone : Joi.string().max(120).optional(),
})

const getContactValidation = Joi.number().positive().required()

const updateContactValidation = Joi.object({
    id : Joi.number().positive().required(),
    first_name : Joi.string().max(100).required(),
    last_name : Joi.string().max(100).optional(),
    email : Joi.string().max(200).email().optional(),
    phone : Joi.string().max(120).optional(),
})

export {
    createContactValidation,
    getContactValidation,
    updateContactValidation
}