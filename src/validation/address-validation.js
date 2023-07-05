
import Joi from "joi"

const createAddressValidation = Joi.object({
    country : Joi.string().max(100).required(),
    postal_code : Joi.string().max(10).required(),
    street : Joi.string().max(100).optional(),
    city : Joi.string().max(100).optional(),
    province : Joi.string().max(100).optional(),
})



export {
    createAddressValidation,
}