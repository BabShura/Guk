var https = require('https');


https.get("https://ddragon.leagueoflegends.com/realms/na.json", (res) => {
    data = ""
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        data += chunk;
    })
    res.on('end', () => {
        try {
            exports.versions = JSON.parse(data);
            // expose this value
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
        }
    })
})
