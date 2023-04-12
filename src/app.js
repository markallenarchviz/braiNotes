const express = require('express');

const postRouter = require('./router/post.route');

const app = express();
app.use(express.json());

app.use(postRouter)

module.exports = app;
