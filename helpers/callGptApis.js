const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function callGptAPI(systemMessage, tokenLimit) {
  const chatHistory = [
    {
      role: "system",
      content: systemMessage,
    },
  ];
  let max_tokens = tokenLimit || 300;
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages: chatHistory,
    temperature: 0,
    max_tokens: max_tokens,
    top_p: 0.9,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  chatHistory.push({
    role: "assistant",
    content: response.choices[0].message.content,
  });

  return response.choices[0].message.content;
}

module.exports = { callGptAPI };
