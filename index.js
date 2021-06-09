const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const router = require('./router');
// import mongoose from 'mongoose';
// import express from 'express';
// "type": "module",


const DB_URL = 'mongodb+srv://user:user@cluster0.douj5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

// app.post('/', (req, res) => {
//   console.log(req.body);
//   // const { author, title, content, picture } = req.body;
//   // const post = await Post.create({ author, title, content, picture });
//   res.status(200).json('post');
// });

// {
// 	"author": "test1",
// 	"title": "test2",
// 	"content": "test3"
// }

// app.post('/', );

// app.listen(PORT, () => console.log(`server started on port ${PORT}`));

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log('Error: ', e);
  }
}

startApp();