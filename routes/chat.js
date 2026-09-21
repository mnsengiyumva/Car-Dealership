const express = require('express');
const router = express.Router();
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

router.post('/', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ message: 'Messages array is required' });
  }

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1000,
      system: `You are a helpful luxury car assistant for Infinity Luxuries, 
               a premium car dealership. Help customers with questions about 
               cars, pricing, rentals, and purchases. Be concise, friendly, 
               and professional. Cars available: Infinity Model 1 ($40,899), 
               Infinity Model 2 ($42,899), Infinity Model 3 ($62,899). 
               Members get discounted prices.`,
      messages
    });

    res.json({ reply: response.content[0].text });

  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ message: 'Chat error', error: err.message });
  }
});

module.exports = router;