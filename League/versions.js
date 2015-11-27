var https = require('https');

function version(){
    this.data = null;
};

version.prototype.set = function(res) {
    info = '';
    data = {};
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        info += chunk;
    })
    res.on('end', () => {
        try {
            data = JSON.parse(info); //has data
            // expose this value, used by other modules to retrieve data.
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
        }
    })
            console.log("PARSED", data);
    version.data = data;
};

version.prototype.retrieve = function() {
    return this.data;
};

v = new version();
https.get("https://ddragon.leagueoflegends.com/realms/na.json", v.set)

console.log("v_obj CHECK", v);

exports.versions = v.retrieve();
