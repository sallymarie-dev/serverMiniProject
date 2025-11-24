import express from "express";
import { randomUUID } from "node:crypto";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
 