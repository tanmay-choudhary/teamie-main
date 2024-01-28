const express = require("express");
const gptController = require("../controllers/gptController");

const router = express.Router();

router.post("/generate-yoga-routine", gptController.generateYogaRoutine);

module.exports = router;
