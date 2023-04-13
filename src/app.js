const express = require('express');
const app = express();

const cors = require('cors');
const conn = require('./config/conn');

const postRouter = require('./router/post.route');

app.use(cors);
conn();

app.use(express.json());

app.use(postRouter)

module.exports = app;

// ZDV6gl2TsqLL3EiT