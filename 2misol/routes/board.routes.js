import {
    getAllboards,
    getoneboards,
    createboards,
    deloneboards
  } from "../controllers/board.controller.js";
  import { Router } from "express";
  const router_b = Router();
  
  router_b.get("/", getAllboards);
  router_b.get("/:id", getoneboards);
  router_b.post("/", createboards);
  router_b.delete("/:id", deloneboards);
  
  
  export default router_b;    