import { PrismaClient } from "@prisma/client";
import { User } from "src/configs/types";

const prisma = new PrismaClient();

export const postUser = async (data: User) => {
  const user = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });
  if (user) {
    return "this email not available";
  }
  const newUser = await prisma.user.create({ data });

  return newUser;
};

export const getUser = async (id: number) => {
  const userUniq = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!userUniq) throw new Error("По ващему запросу ничего не найдено");
  return userUniq;
};

export const deleteUser = async (id: number) => {
  const userDelete = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!userDelete) {
    return false;
  }
  await prisma.user.delete({
    where: {
      id,
    },
  });
  return true;
};
