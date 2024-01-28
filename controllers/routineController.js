// controllers/taskController.js
const taskModel = require("../models/routineModel");

async function saveRoutine(req, res) {
  try {
    const data = await taskModel.saveRoutine(JSON.stringify(req.body));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllRoutines(req, res) {
  try {
    const data = await taskModel.getAllRoutines();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  saveRoutine,
  getAllRoutines,
};
