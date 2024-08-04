import express from "express";
import { getAliveCheck } from "../controllers/alive.controller.js";

const router = express.Router();
router.get("/", getAliveCheck);

export default router;
