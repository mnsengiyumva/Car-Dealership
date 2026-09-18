const express = require('exppress');
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


mongoose.connect(process.env.MONGO_URI).then(( => {
    console.log(MongoDB connected)
}))