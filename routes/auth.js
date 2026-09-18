const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/User')


router.post('/signup', async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const exists = await User.findOne({email});
    }
})