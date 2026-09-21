const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', require('./routes/auth'))
app.use('/api/cars', require('./routes/cars'))
app.use('/api/cart', require('./routes/cart'))
app.use('/api/chat', require('./routes/chat'))


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('MongoDB connected')
})

.catch(err => console.error(err));

console.log('auth:', require('./routes/auth'));
console.log('cars:', require('./routes/cars'));
console.log('cart:', require('./routes/cart'));
console.log('chat:', require('./routes/chat'));
