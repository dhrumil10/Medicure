import express from "express";
import aliveRoutes from "./alive.routes.js";

const router = express.Router();

router.use("/", aliveRoutes);

export default router;
