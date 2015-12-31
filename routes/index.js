var express = require('express')(lolAPI);
var router = express.Router();

var League = require('../League');

var lolAPI = require('lol-riot-api-module');
var lolApi = new lolAPI({
    key: process.env.RIOT_API_KEY,
    region: 'na'
})

var championggApi = process.env.CHAMPION_GG_API_KEY;


router.route('/')
.get( (req, res, next) => {
    res.redirect(webtester.slack.com)
})

router.route('/slack')
.post(League.cache(lolApi), League.saybot)

module.exports = router;
