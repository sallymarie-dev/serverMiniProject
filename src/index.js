import express from "express";
import { randomUUID } from "node:crypto";

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// data array with seed data
let snacksStorage = [
  { id: randomUUID(), name: "Cheezit", price: 4.99, tags: ["crackers", "cheese snack"] },
  { id: randomUUID(), name: "Pringles", price: 2.49, tags: ["potato", "flavored crisp"] },
  { id: randomUUID(), name: "Cakes", price: 4.49, tags: ["Debbie cakes", "iced buns"] },
];

// GET /snacks to return all snacks
app.get("/snacks", (req, res) => {
  res.status(200).json({ snacks: snacksStorage });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
