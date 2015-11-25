var express = require('express');
var router = express.Router();

router.route('/')
.get( (req, res, next) => {
    res.send("Testing, guagua.")
})

router.route('/slack')
.post( (req, res, next) => {
    console.log("on /slack")
    console.log(req.body)

    var saybot = slack.respond(req.body, (hook)=>{
        // Do stuff here
        console.log(hook);
        return {
            "text": "Use \"castLoL <desc> <name>\" commands to display information on Champions, Items, Maps, and Monsters.",
            "username": "LoL-botsy"
        }
    })
    res.json(saybot);
})

module.exports = router;
