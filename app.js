const express = require("express");
const routineRoutes = require("./routes/routineRoutes");
const gptRoutes = require("./routes/gptRoutes");
const cors = require("cors");
const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());
app.use("/api/tasks", routineRoutes);
app.use("/api/gpt", gptRoutes);
app.get("/", (req, res) => {
  res.send(" Server is Running! ");
});

app.get("/health", (req, res) => {
  res.json({ message: "server is working fine" });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
