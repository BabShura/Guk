var https = require('https');


exports.league = https.get("https://ddragon.leagueoflegends.com/realms/na.json", (res) => {
    data = ""
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        data += chunk;
    })
    res.on('end', () => {
        try {
            res.versions = JSON.parse(data);
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
        }
    })
})
