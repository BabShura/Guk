var https = require('https');

function version(){
    this.data = null;
};

version.prototype.export = function(info) {
    this.data = info;
};

version.prototype.retrieve = function() {
    return this.data;
};

function objectchanger(obj,info)
{
	obj.export(info); // runs the method of the object being passed in
}

v = new version();


https.get("https://ddragon.leagueoflegends.com/realms/na.json", (res, objectchanger) => {
    info = ""
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        info += chunk;
    })
    res.on('end', () => {
        try {
            data = JSON.parse(info); //has data
            objectchanger(v,data)
            // expose this value, used by other modules to retrieve data.
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
        }
    })
})

console.log("v_obj", v);

exports.versions = v.retrieve();
