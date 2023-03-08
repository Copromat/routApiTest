import { PrismaClient } from "@prisma/client";
import { Airplain } from "src/configs/types";

const prisma = new PrismaClient();

export const postAirplain = async (data: Airplain) => {
  if (!data.model) return "zalyoaa";
  const airplain = await prisma.airplain.create({
    data,
  });
  if (!airplain) throw new Error("По ващему запросу ничего не найдено");
  return airplain;
};

export const getAirplans = async (query?: { text: string }) => {
  const airplains = await prisma.airplain.findMany({
    where: { model: { contains: query?.text || "" } },
  });
  return airplains;
};

export const getAirplan = async (id?: number) => {
  const airplain = await prisma.airplain.findUnique({
    where: {
      id,
    },
  });
  if (!airplain) throw new Error("По ващему запросу ничего не найдено");
  return airplain;
};
