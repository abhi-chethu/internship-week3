

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const route=require('./routes/routes')


app.use(express.json());

const PORT = 8000;

mongoose.connect('mongodb+srv://abhishek:abhishek@cluster0.6bksxua.mongodb.net/')
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/', route);

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});
