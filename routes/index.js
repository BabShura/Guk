var express = require('express');
var router = express.Router();

router.route('/')
.get( (req, res, next) => {
    res.send("Testing, guagua.")
})

router.route('/slack')
.post( (req, res, next) => {
    trigger = req.body.tirgger_word
    command = req.body.text
    command.replace(trigger ,'').trim().split(' ') //condense the call to an array of strings

    if(command[0].toLowerCase() === "champion" || command[0].toLowerCase() === "champ"){
            text: "Testing champ"
    }
    else if (command[0].toLowerCase() === "monster") {
            text: "Testing monster"
    }
    else if (command[0].toLowerCase() === "map") {
        var saybot = {
            text: "Testing map"
        }

    }
    else if (command[0].toLowerCase() === "item") {
            text: "Testing item"
    }
    else {
        var saybot = slack.respond(req.body, (hook)=>{
            // Do stuff here
            console.log(hook);
            return {
                "text": "Use \"castLoL <desc> <name>\" commands to display information on Champions, Items, Maps, and Monsters.",
                "username": "LoL-botsy"
            }
        })
    }

    res.json(saybot);
})

module.exports = router;
