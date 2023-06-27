import { prismaClient } from "../src/application/database";
import bcrypt from "bcrypt"

export const removeTestUser = async () => {
    await prismaClient.user.delete({
        where: {
            username:'test'
        }
    })
};


export const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username: 'test',
            password: await bcrypt.hash("rahasia", 10),
            name: 'test',
            token:'test'
        }
    })
};

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: "test"
        }
    });
}


export const removeAllTestContact = async () => {
    return prismaClient.contact.deleteMany({
        where: {
            username: 'test'
        }
    });
}

export const createTestContact = async () => {
    return prismaClient.contact.create({
        data: {
            username:"test",
            first_name:"test",
            last_name:"test",
            email:"test@mail.com",
            phone:"090909090909"
        }
    });
}

export const getTestContact = async () => {
    return prismaClient.contact.findFirst({
        where: {
            username:"test"
        }
    });
}