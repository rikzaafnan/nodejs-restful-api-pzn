import { validate } from "../validation/validation.js";
import { getContactValidation } from "../validation/contact-validation.js";
import { createAddressValidation } from "../validation/address-validation.js";
import {prismaClient} from "../application/database.js"
import {ResponseError} from "../error/response-error.js"

// const create = async (user, contactId, request) => {

//     contactId = validate(getContactValidation, contactId)

//     const countContactInDatabase = await prismaClient.contact.count({
//         where : {
//             username: user.username,
//             id: contactId
//         }
//     });

//     if(countContactInDatabase !== 1) {
//         throw new ResponseError(404, "contact is not found")
//     }

//     const address = validate(createAddressValidation,request)
//     address.contact_id = contactId

//     return prismaClient.address.create({
//         data : address,
//         select: {
//             id:true,
//             street: true,
//             city: true,
//             province:true,
//             country:true,
//             post_code:true
//         }
//     })
// }


const create = async (user, contactId, request) => {
    contactId = validate(getContactValidation, contactId)

        const countContactInDatabase = await prismaClient.contact.count({
            where : {
                username: user.username,
                id: contactId
            }
        });
    
        if(countContactInDatabase !== 1) {
            throw new ResponseError(404, "contact is not found")
        }

    const address = validate(createAddressValidation, request);
    address.contact_id = contactId;

    return prismaClient.address.create({
        data: address,
        select: {
            id: true,
            street: true,
            city: true,
            province: true,
            country: true,
            postal_code: true
        }
    })
}

export default {
    create
}