const gptModel = require("../models/gptModel");
const GPT = require("../helpers/callGptApis");
const { getMessage } = require("../helpers/systemMessage");
async function generateYogaRoutine(req, res) {
  try {
    let { input1, input2 } = req.body;
    let systemMessage = getMessage(input1, input2);
    const generatedResponse = await GPT.callGptAPI(systemMessage, 1500);
    res.json({ generatedResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  generateYogaRoutine,
};
