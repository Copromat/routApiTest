import { PrismaClient } from "@prisma/client";
//import { query } from "express";
const prisma = new PrismaClient
export const postCar = async (data: { model: string }) => {
    const car = await prisma.car.create({ data })
    if (!car) throw new Error("404")
    return car
}


export const getCars = async (query?: { text: string }) => {
    const cars = await prisma.car.findMany({
        where: { model: { contains: query?.text || "" } },
    })
    if (!cars) throw new Error("404")
    return cars
}

export const getCar = async (id: number) => {
    const car = prisma.car.findUnique({
        where: {
            id,
        }
    })
    if (!car) throw new Error('404')
}
