import express from "express";
import { randomUUID } from "node:crypto";

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// data array with seed data
let snacksStorage = [
  {
    id: randomUUID(),
    name: "Cheezit",
    price: 4.99,
    tags: ["crackers", "cheese snack"],
  },
  {
    id: randomUUID(),
    name: "Pringles",
    price: 2.49,
    tags: ["potato", "flavored crisp"],
  },
  {
    id: randomUUID(),
    name: "Cakes",
    price: 4.49,
    tags: ["Debbie cakes", "iced buns"],
  },
  {
    id: randomUUID(),
    name: "Juice",
    price: 2.59,
    tags: ["Hawaiian Punch", "thirst quincher"],
  },
  {
    id: randomUUID(),
    name: "PopTarts",
    price: 2.59,
    tags: ["chocolate", "breakfast snack"],
  },
];

// GET /snacks to return all snacks
app.get("/snacks", (req, res) => {
  res.status(200).json({ snacks: snacksStorage });
});

app.post("/snacks", (req, res) => {
  const { name, price, tags } = req.body;

  // Validation for post itms
  if (!name) return res.status(400).json({ error: "Snack name is required" });
  if (price === undefined || typeof price !== "number")
    return res
      .status(400)
      .json({ error: "Snack price is required and must be a number" });

  // Creating new snacks
  const newSnack = {
    id: randomUUID(),
    name,
    price,
    tags: Array.isArray(tags) ? tags : [],
  };
  snacksStorage.push(newSnack);

  res.status(201).json(newSnack);
});

// GET /snacks/:id - get a snack by ID
app.get("/snacks/:id", (req, res) => {
  const snack = snacksStorage.find((s) => s.id === req.params.id);
  if (!snack) return res.status(404).json({ error: "Snack not found" });
  res.status(200).json(snack);
});

// DELETE /snacks/:id so i can remove a snack by the ID
app.delete("/snacks/:id", (req, res) => {
  const snack = snacksStorage.find((s) => s.id === req.params.id);
  if (!snack) return res.status(404).json({ error: "Snack not found" });

  snacksStorage = snacksStorage.filter((s) => s.id !== req.params.id);
  res.status(200).json({ message: "Snack deleted successfully" });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express Snacks API!</h1>");
});

app.post("/echo", (req, res) => {
  res.json({ received: req.body, message: "Echo successful!" });
});
// 404 route error codin
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
