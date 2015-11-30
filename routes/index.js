var express = require('express');
var router = express.Router();

router.route('/')
.get( (req, res, next) => {
    res.redirect(webtester.slack.com)
})

router.route('/slack')
.post( require('../League').saybot )

module.exports = router;
