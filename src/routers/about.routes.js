const router = require('express')();

router.get('/about', function (req, res) {
    res.json('Hello World About')
})

module.exports = router