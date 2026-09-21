const express = require('express')
const router = express.Router();
const Anthropic = require('@anthropic-ai/sdk')

const client = new Anthropic({apiKey: process.ANTHROPIC_API_KEY});


rou
