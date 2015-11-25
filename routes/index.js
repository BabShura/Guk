var express = require('express');
var router = express.Router();

router.route('/')
.get( (req, res, next) => {
    res.send("Testing, guagua.")
})

router.route('/slack')
.post( (req, res, next) => {
    trigger = req.body.trigger_word;
    command_str = req.body.text;
    command = command_str.replace(trigger ,'').trim().split(' '); //condense the call to an array of strings
    console.log(command);

    if(command[0].toLowerCase() === "champion" || command[0].toLowerCase() === "champ"){
        console.log("ON CHAMP", command)
        var saybot = require('../League/champ').saybot;

    }
    else if (command[0].toLowerCase() === "monster") {
        var saybot = {
            text: "The RITO API has no data on minions or neutral monsters. Go to <forum link> to discuss and let RITO know we care."
        }

    }
    else if (command[0].toLowerCase() === "map") {

        var saybot = {
            text: "The RITO API has no data on Map resources (turrets, inhibitors). Go to <forum link> to discuss and let RITO know we care."
        }
    }
    else if (command[0].toLowerCase() === "item") {
        var hold = require('../League/item');
        var saybot = {
            text: "The RITO API does not serve data on individual Items. Making this a very exhaustive computation. Go to <forum link> to discuss and let RITO know we care." + hold.test
        }
    }
    else if (command[0].toLowerCase() === "summoner") {
        var summoner = require('../League/summoner')(command[1]);
        var saybot = {
            "text": "Testing item"
        }
    }
    else {
        var saybot = {
            "text": "Use \"castLoL <desc> <name>\" commands to display information on Champions, Items, Maps, and Monsters.",
            "username": "LoL-botsy"
            "icon_emoji": ":dustu_stick:"
        }
    }

    //Sending back the json message
    console.log("Responding.")
    res.json(saybot);
})

module.exports = router;
