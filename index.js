const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8000;

app.use('/openai', require(`./server/routes/router`));

// load port
app.listen(PORT, () => {
    console.log(`Service is runnig on http://localhost:${PORT}}`);
  });
