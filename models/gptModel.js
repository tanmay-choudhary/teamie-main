const axios = require("axios");

async function callGpt(prompt) {
  const apiKey = process.env.OPENAI_API_KEY;
  const endpoint =
    "https://api.openai.com/v1/engines/davinci-codex/completions";

  const data = {
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 200,
    n: 1,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  try {
    const response = await axios.post(endpoint, data, { headers });
    return response.data.choices[0].text.trim();
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

module.exports = {
  callGpt,
};
