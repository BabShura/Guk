var http = require('http');

var league = require('./versions')

var name = command[1];
var skin = command[2] || '0';

//Access ddragon latest version for Champions
hold = league.versions();
// champ_v = league.versions().n.champion

champ_v = '3.23.1'


champ = http.get("http://ddragon.leagueoflegends.com/cdn/" + champ_v + "/data/en_US/champion/" + name + ".json", (res) => {
    data = ""
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        data += chunk;
    })
    res.on('end', (cb) => {
        res.champ = JSON.parse(data);
        // Do something to pass up the champ data.
    })
}).res.champ



// CHAMP IMAGES TO USE FOR SLACK
// champ.images.links = {
//     "load" : "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champ.name + "_" + skin + ".jpg",
//     "square" : "http://ddragon.leagueoflegends.com/cdn/" + league_v.n.champion + "/img/champion/" + champ.images.full ,
//     "sprite" : "http://ddragon.leagueoflegends.com/cdn/" + league_v.n.champion + "/img/sprite/"
// }



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
    "text": ""
}


spells_info = {
    "fallback": "Champ Spells",
    "title": "Spells",
    "text": ""

}


champ_data = {
    "text": "Champ Info",
    "username": "LoL-champ",
    "icon_emoji": ":champ:"
    // "attachments": []
}

module.exports = {
    "champ": champ_data
}
