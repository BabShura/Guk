var https = require('https');

data = {}

https.get("https://ddragon.leagueoflegends.com/realms/na.json", (res) => {
    info = ""
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        info += chunk;
    })
    res.on('end', () => {
        try {
            data = JSON.parse(info);
            console.log("INSIDE", data)
            // expose this value, used by other modules to retrieve data.
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
        }
    })
})

return setTimeout( ()=>{
    console.log("CHECK", data)
})
