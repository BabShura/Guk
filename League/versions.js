var https = require('https');

massive = {}

https.get("https://ddragon.leagueoflegends.com/realms/na.json",(res(massive))){
    info = '';
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        info += chunk;
    })
    res.on('end', massive = () => {
        try {
            data = JSON.parse(info); //Find a wy to pass this data around.
            return data
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
        }
    })
}
