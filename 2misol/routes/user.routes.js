import {
    getAllusers,
    getoneusers,
    createusers,
    deloneusers
  } from "../controllers/user.controller.js";
  import { Router } from "express";
  const router = Router();
  
  router.get("/", getAllusers);
  router.get("/:id", getoneusers);
  router.post("/", createusers);
  router.delete("/:id", deloneusers);
  
  
  export default router;    