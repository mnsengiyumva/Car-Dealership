const express = require('express')
const router = express.Router();
const Anthropic = require('@anthropic-ai/sdk')

const client = new Anthropic({apiKey: process.ANTHROPIC_API_KEY});


router.post('/', async(req, res) => {

    const{messages} = req.body;

    try{

        const response = await client.messages.create({
            model: 'claude-sonnet-4-6',
            max_tokens = 1000,
            system = `You are helpful Luxury car asistant for Infinity luxuries..`,
            messages
        });

        res.json({reply: response.content[0].text})


    } 
    catch(err){

        res.status(500).json({message: 'Chat error'})

    }
})

module.exports = router


