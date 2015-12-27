exports.champ = (specifiers, res)=>{

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
            "fallback": "Basic champ information",
            "title": "Basic information",
            "text": "Name: " + champ.name + " " + champ.title
        }

        image = {
            "fallback": "Champ image",
            "image_url": champ.image.links.square
        }

        passive = {
            "fallback": "Champ Passive",
            "title": "Passive",
            "text": champ.passive.name + ": " + champ.passive.descrition
        }

        spells = {
            "fallback": "Champ Spells",
            "title": "Spells",
            "text": ""

        }

        //Assemble the champion data parts in slack format
        saybot = {
            "text": "Champ Info",
            "username": "LoL-champ",
            "icon_emoji": ":champ:",
            "attachments": []//[basic, image, passive, spells]
        }

        console.log("SAYBOT", saybot);

        console.log(saybot);
        res.JSON(saybot)
    })
}
