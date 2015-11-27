var https = require('https');

function dataExport(data){
    exports.versions = data;
}

https.get("https://ddragon.leagueoflegends.com/realms/na.json", (res, dataExport) => {
    info = ""
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        info += chunk;
    })
    res.on('end', () => {
        try {
            data = JSON.parse(info);
            console.log("INSIDE", data)
            dataExport(data);
            // expose this value, used by other modules to retrieve data.
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
        }
    })
})
