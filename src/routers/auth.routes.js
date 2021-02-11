const router = require('express')();
const auth = require('../controllers/Auth');

router.get('/login', function (req, res) {
    res.json('Hello World login')
})

router.get('/register', function (req, res) {
    res.json('Hello World register')
})

module.exports = router