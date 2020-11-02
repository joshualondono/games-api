const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

const gameRoutes = require('./routes/gameRoutes');

const port = process.env.PORT || 3001;
//general middleware
app.use(morgan('dev'));

//middleware for POST request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//gameoutes middleware
app.use('/api/v1/games', gameRoutes);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
