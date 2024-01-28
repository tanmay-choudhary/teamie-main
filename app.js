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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
