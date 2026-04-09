const express = require("express");
const app = express();

app.use(express.json());

app.post("/submit", (req, res) => {
  const { name } = req.body;

  console.log("New Lead:", name);

  res.json({
    message: "✅ Data received successfully!"
  });
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3000, () => console.log("Server running"));
