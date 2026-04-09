const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/submit", (req, res) => {
  const { name } = req.body;

  console.log("New lead:", name);

  res.json({
    message: "Data received successfully",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
