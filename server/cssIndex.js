const express = require('express');
require('dotenv').config();;

const app = express();

const { SERVER_PORT } = process.env;

app.use(express.static(`${__dirname}/../build`));

app.listen(SERVER_PORT, ()=> console.log(`Connect on port ${SERVER_PORT}`));