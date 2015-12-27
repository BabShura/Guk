exports.champ = (specifiers, res)=>{
    this.res = res;

    var that = this;

    champ = app.get("cache").champs.data[specifiers.name]
    console.log("FOUND", champ);
    // CHAMP IMAGES TO USE FOR SLACK
    champ.image.links = {
        "load" : "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champ.name + "_" + skin + ".jpg",
        "square" : "http://ddragon.leagueoflegends.com/cdn/" + specs.version + "/img/champion/" + champ.images.full ,
        "sprite" : "http://ddragon.leagueoflegends.com/cdn/" + specs.version + "/img/sprite/"
    }

    console.log("Added img links", champ);

    basic = {
        "mrkdwn_in": ["text", "pretext", "fields"],
        "fallback": "Basic champ information",
        "title": "Basic information",
        "text": "Name: *" + champ.name + "* " + champ.title
    }

    image = {
        "mrkdwn_in": ["text", "pretext", "fields"],
        "fallback": "Champ image",
        "image_url": champ.image.links.square
    }

    passive = {
        "mrkdwn_in": ["text", "pretext", "fields"],
        "fallback": "Champ Passive",
        "title": "Passive",
        "text": "*" + champ.passive.name + "*: " +
        champ.passive.description + ""
    }

    spells = {

            "mrkdwn_in": ["text", "pretext", "fields"],
            "fallback": "Champ Spells",
            "title": "Spells",
            "fields": [{
                "title": "Q: " + champ.spells[0].name,
                "value": champ.spells[0].description +
                //"\nBase DMG: " + champ.spells[0].effectBurn[1] +
                "\nCD/lvl: " + champ.spells[0].cooldownBurn
                ,
                "short": true
            },
            {
                "title": "W: " + champ.spells[1].name,
                "value": champ.spells[1].description +
                "\nCD/lvl: " + champ.spells[1].cooldownBurn
                ,
                "short": true
            },
            {
                "title": "R: " + champ.spells[2].name,
                "value": champ.spells[2].description +
                "\nCD/lvl: " + champ.spells[2].cooldownBurn
                ,
                "short": true
            },
            {
                "title": "T: " + champ.spells[3].name,
                "value": champ.spells[3].description +
                "\nCD/lvl: " + champ.spells[3].cooldownBurn
                ,
                "short": true
            }
            ]
    }

    //Assemble the champion data parts in slack format
    saybot = {
        "text": "Champ Info",
        "username": "LoL-champ",
        "icon_emoji": ":champ:",
        "attachments": [basic, image, passive, spells],

        "mrkdwn": true
    }

    setTimeout(function(){
        that.res.json(saybot)
    })
}
