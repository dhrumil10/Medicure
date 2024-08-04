import { getAliveStatus } from "../services/alive.service.js";

export const getAliveCheck = (req, res) => {
  const status = getAliveStatus();
  res.status(200).json({ status });
};
