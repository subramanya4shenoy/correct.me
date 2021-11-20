const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("server express started");
})

app.listen(8080);