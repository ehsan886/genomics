const http = require('http');

const express = require('express');

const app = express();

app.get('/time', (req, res, next) => {
    return res.send(new Date().toString());
})

app.listen(3000);