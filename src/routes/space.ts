import { Router } from "express";
import SpaceController from "../controllers/SpaceController";
const router = Router();

router.get("/", SpaceController.getOne);
router.post("/", SpaceController.parking);


export default router;
