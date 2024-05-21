import { Router } from "express";
const router_b = Router();
import boardRouter from "./board.routes.js";
router_b.use("/", boardRouter);
export default router_b;
