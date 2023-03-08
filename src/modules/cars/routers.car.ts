import { getCar,getCars,postCar } from "./repository.car";
import express from "express";


const routers = express.Router();

routers.post("/", (req, res) => {});
routers.get("/",async (req, res) => {
    const response =await getCars()
    return res.send(response)
});
routers.get("/", (req, res) => {});

module.exports = routers;
