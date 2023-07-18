const express = require('express');

const { generateImage } = require('../controller/openaiController');
const route = express.Router();

route.post('/generateimage', generateImage);

module.exports = route;