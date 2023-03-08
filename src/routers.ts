import express from "express";

const routers = express.Router();
const usersRouters = require("./modules/users/routers.user");
const carsRouters = require("./modules/cars/routers.car");
const airRouters = require("./modules/airplains/routers.airplain");
//const rolesRouter= require("./modules/roles/routers.roles")

routers.use("/airplain", airRouters);
routers.use("/cars", carsRouters);
//routers.use("/roles",rolesRouter)
routers.use("/users", usersRouters);

module.exports = routers;
