const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    fs.createReadStream(path.join(__dirname, 'index.html'), {
        encoding: 'utf8'
    }).pipe(res);
});

app.get('/profile/:id', function (req, res) {
    res.render('profile', {
        id: req.params.id
    });
    // res.send(`The id is ${req.params.id}`);
})

app.listen(8080, '127.0.0.1');