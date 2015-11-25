console.log("IN CHAMP JS", command)
    var name = command[1];
    var skin = command[2] || '0';
    league_v = http.get("https://ddragon.leagueoflegends.com/realms/na.json")
    console.log(league_v)

    champ = http.get("http://ddragon.leagueoflegends.com/cdn/" + league_v + "/data/en_US/champion/" + name + ".json")

    champ.img.links = {
        "load" : "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champ.name + "_" + champ_skin + ".jpg",
        "square" : "http://ddragon.leagueoflegends.com/cdn/" + league_v.champion + "/img/champion/" + champ.img.full ,
        "sprite" : "http://ddragon.leagueoflegends.com/cdn/" + leagu_v.champion + "/img/sprite/"
    }


    //Make attachments for each data set

    // {
        //     "fallback": "Required plain-text summary of the attachment.",
        //     "color": "#36a64f",
        //     "pretext": "Optional text that appears above the attachment block",
        //     "author_name": "Bobby Tables",
        //     "author_link": "http://flickr.com/bobby/",
        //     "author_icon": "http://flickr.com/icons/bobby.jpg",
        //     "title": "Slack API Documentation",
        //     "title_link": "https://api.slack.com/",
        //     "text": "Optional text that appears within the attachment",
        //     "fields": [
        //         {
        //             "title": "Priority",
        //             "value": "High",
        //             "short": false
        //         }
        //     ],
        //     "image_url": "http://my-website.com/path/to/image.jpg",
        //     "thumb_url": "http://example.com/path/to/thumb.png"
        // }

        basic_info = {
            "fallback": "Basic champ information",
            "title": "Basic information",

        }

        spells_info = {
            "fallback": "Champ Spells",
            "title": "Spells",


        }


    champ_data : {
        "text": "Champ Info",
        "username": "LoL-champ",
        "icon_emoji": ":champ:",
        "attachments": []
    }

module.exports = {
    champ : champ_data
}
