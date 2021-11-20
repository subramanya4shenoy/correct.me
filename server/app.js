const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

dotenv.config();

app.use((req, res, next) => {
    console.log("server express started");
})

mongoose
.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.s8zg4.mongodb.net/${process.env.MONGO_DB_DEFAULTDB}?retryWrites=true&w=majority`)
.then(result => {
    app.listen(process.env.PORT);
    console.log("connected to mongoDB")
})
.catch( err => {
    console.log("error Mongoose", err);
})