import express from 'express';
import appConfig from "./src/configs/app.config.js";
import dotenv from "dotenv";
import indexRoutes from "./src/api/routes/index.routes.js";

dotenv.config();

const app = express();
const { HOSTNAME, PORT } = appConfig;

app.use("/", indexRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
