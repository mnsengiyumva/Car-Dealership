const express = require('exppress');
const mongoose= require('mongoose');
const cors = require('cors');
require('dotenv').config();

application.use(cors());
application.use(express.json());
application.use(express.static('public'));