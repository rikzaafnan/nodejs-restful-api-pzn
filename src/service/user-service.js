import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import { registerUserValidation } from "../validation/user-validation"
import { validate } from "../validation/validation"

const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser  = await prismaClient.user.count({
        where: {
            username: user.username
        }
    });


    if (countUser === 1) {
            throw new ResponseError(400, "Username already exists")
    }


    user.password = await bcrypt.hash(user.password, 10);

    const result = await prismaClient.user.create({
        data:user,
        select: {
            username:true,
            name:true
        }
    })


    return result

}