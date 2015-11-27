var https = require('https');


function version(){
    this.data = {};
}

data.prototype.export(info){
    this.data = info;
}

v = new version();


https.get("https://ddragon.leagueoflegends.com/realms/na.json", (res, v) => {
    info = ""
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        info += chunk;
    })
    res.on('end', () => {
        try {
            data = JSON.parse(info);
            console.log("INSIDE", data)
            v.Export(data);
            // expose this value, used by other modules to retrieve data.
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
        }
    })
})

console.log("v_obj", v);

exports.versions = v.data
