import { Router } from "express";
import { checkIPs } from "../middlewares/checkIPs";
import space from "./space";

const routes = Router();

routes.use("/space",[checkIPs], space);

routes.use('', (req, res) => {
    res.send(200)
});



export default routes;