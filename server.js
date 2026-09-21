

// console.log('Starting server...');

// const expresss = require('express');
// console.log('Express loaded');

// const mongoose = require('mongoose');
// console.log('Mongoose loaded');

// const cors = require('cors');
// console.log('CORS loaded');

// require('dotenv').config();
// console.log('ENV loaded, MONGO_URI:', process.env.MONGO_URI);

// const express = require('express');
// const router = express.Router();
// const Anthropic = require('@anthropic-ai/sdk');

// const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// router.post('/', async (req, res) => {
//   const { messages } = req.body;

//   if (!messages || !Array.isArray(messages)) {
//     return res.status(400).json({ message: 'Messages array is required' });
//   }

//   try {
//     const response = await client.messages.create({
//       model: 'claude-sonnet-4-6',
//       max_tokens: 1000,
//       system: `You are a helpful luxury car assistant for Infinity Luxuries, 
//                a premium car dealership. Help customers with questions about 
//                cars, pricing, rentals, and purchases. Be concise, friendly, 
//                and professional. Cars available: Infinity Model 1 ($40,899), 
//                Infinity Model 2 ($42,899), Infinity Model 3 ($62,899). 
//                Members get discounted prices.`,
//       messages
//     });

//     res.json({ reply: response.content[0].text });

//   } catch (err) {
//     console.error('Chat error:', err);
//     res.status(500).json({ message: 'Chat error', error: err.message });
//   }
// });

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(3000, () => {
//       console.log('Server running on http://localhost:3000');
//     });
//   })
//   .catch(err => {
//     console.error('MongoDB connection failed:', err.message);
//   });


// module.exports = router;
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'CarDealership.html'));
});

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/cars', require('./routes/cars'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/chat', require('./routes/chat'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
  });


