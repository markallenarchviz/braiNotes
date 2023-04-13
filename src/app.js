const express = require('express');
const app = express();

//const cors = require('cors');
const conn = require('./config/conn');

const postRouter = require('./router/post.route');

app.use(express.json());

//app.use(cors);
conn();

app.use(postRouter)

module.exports = app;

// ZDV6gl2TsqLL3EiT