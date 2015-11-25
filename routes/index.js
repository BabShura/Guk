var express = require('express');
var router = express.Router();

router.route('/')
.get( (req, res, next) => {
    res.send("Testing, guagua.")
})

router.route('/slack')
.post( (req, res, next) => {
    trigger = req.body.trigger_word
    command = req.body.text
    command.replace(trigger ,'').trim().split(' ') //condense the call to an array of strings
    console.log(command)

    if(command[0].toLowerCase() === "champion" || command[0].toLowerCase() === "champ"){
        var saybot = {
            text: "Testing champion"
        }

    }
    else if (command[0].toLowerCase() === "monster") {
        var saybot = {
            text: "Testing monster"
        }

    }
    else if (command[0].toLowerCase() === "map") {
        var saybot = {
            text: "Testing map"
        }
    }
    else if (command[0].toLowerCase() === "item") {
        var saybot = {
            text: "Testing item"
        }
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
