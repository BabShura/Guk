var https = require('https');

function objectchanger(obj,info)
{
	obj.export(info)); // runs the method of the object being passed in
}

function version(){
    this.data = {};
}

version.prototype.export(info){
    this.data = info;
}

version.prototype.retrieve() {
    return this.data;
};

v = new version();


https.get("https://ddragon.leagueoflegends.com/realms/na.json", (res, objectchanger) => {
    info = ""
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        info += chunk;
    })
    res.on('end', () => {
        try {
            data = JSON.parse(info);
            console.log("INSIDE", data)
            objectchanger(v,data)
            // expose this value, used by other modules to retrieve data.
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
        }
    })
})

console.log("v_obj", v);

exports.versions = v.retrieve();
