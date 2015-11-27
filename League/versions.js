var https = require('https');

function version(){
    this.data = {};
};

version.prototype.set = function(res) {
    info = ''
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        info += chunk;
    })
    res.on('end', () => {
        try {
            this.data = JSON.parse(info); //has data
            data = JSON.parse(info);
            // expose this value, used by other modules to retrieve data.
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
        }
    })
    console.log(res.data);
};

version.prototype.retrieve = function() {
    return this.data;
};

v = new version();
https.get("https://ddragon.leagueoflegends.com/realms/na.json", v.set)

console.log("v_obj CHECK", v);

exports.versions = v.retrieve();
