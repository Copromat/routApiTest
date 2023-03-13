import { getUser, postUser, deleteUser } from "./repository.user";
import express from "express";

const routers = express.Router();

routers.post("/", async (req, res) => {
  const { body } = req;
  if (!body) return res.sendStatus(400);
  const response = await postUser(body);
  return res.send(response);
});

routers.get("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await getUser(+id);
  return res.send(response);
});

routers.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await deleteUser(+id);
  return res.send(response);
});

module.exports = routers;
