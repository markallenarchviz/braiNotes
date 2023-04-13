const express = require('express');
const app = express();

//const cors = require('cors');
const conn = require('./config/conn');
const errorHanddler = require('./middlewares/errorHanddler');

const postRouter = require('./router/post.route');

app.use(express.json());

//app.use(cors);
conn();

app.use('/api/post', postRouter)
app.use(errorHanddler);

module.exports = app;

// ZDV6gl2TsqLL3EiT