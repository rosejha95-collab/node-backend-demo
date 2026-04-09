const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// HOME ROUTE (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// SUBMIT ROUTE
app.post("/submit", (req, res) => {
  const { name } = req.body;

  console.log("New Lead:", name);

  res.json({
    message: "Data received successfully!"
  });
});

// PORT FIX
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
