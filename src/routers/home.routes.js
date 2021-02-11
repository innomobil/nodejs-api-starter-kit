const app = require('express')();

app.get('/', function (req, res) {
    res.json('Hello World')
})

module.exports = app