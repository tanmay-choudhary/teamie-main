// routes/taskRoutes.js
const express = require("express");
const routineController = require("../controllers/routineController");

const router = express.Router();

router.post("/save-routine", routineController.saveRoutine);
router.get("/routine", routineController.getAllRoutines);

module.exports = router;
