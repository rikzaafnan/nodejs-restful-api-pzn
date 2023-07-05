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


export const removeAllTestContacts = async () => {
    await prismaClient.contact.deleteMany({
        where: {
            username: 'test'
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


export const createManyTestContacts = async () => {
    for (let i = 0; i < 15; i++) {
        await prismaClient.contact.create({
            data: {
                username: `test`,
                first_name: `test ${i}`,
                last_name: `test ${i}`,
                email: `test${i}@pzn.com`,
                phone: `080900000${i}`
            }
        })
    }
}

export const removeAllTestAddresses = async () => {
    await prismaClient.address.deleteMany({
        where: {
            contact: {
                username: "test"
            }
        }
    });
}

export const createTestAddress = async () => {
    const contact = await getTestContact();
    await prismaClient.address.create({
        data: {
            contact_id: contact.id,
            street: "jalan test",
            city: 'kota test',
            province: 'provinsi test',
            country: 'indonesia',
            postal_code: '234234'
        }
    })
}

export const getTestAddress = async () => {
    return prismaClient.address.findFirst({
        where: {
            contact: {
                username: "test"
            }
        }
    })
}