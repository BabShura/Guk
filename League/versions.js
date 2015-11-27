var https = require('https');

exports.versions = () => {
    versions = {}
    https.get("https://ddragon.leagueoflegends.com/realms/na.json", (res) => {
        data = ""
        res.setEncoding('utf8')
        res.on('data', (chunk) => {
            data += chunk;
        })
        res.on('end', () => {
            try {
                versions = JSON.parse(data);
                // expose this value, used by other modules to retrieve data.
            } catch (err) {
                console.error('Unable to parse response as JSON', err);
            }
        })
    })

    setTimeOut( ()=>{
     return versions
    })
}
