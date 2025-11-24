import express from "express";
import { randomUUID } from "node:crypto";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  const bodyToLog = ["POST", "PUT", "PATCH"].includes(req.method) ? req.body : {};
  console.log(`${req.method} ${req.path}`, { body: bodyToLog, query: req.query, params: req.params });

  res.on("finish", () => {
    console.log(`Response status: ${res.statusCode}`);
  });

  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
 