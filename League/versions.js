var https = require('https');
exports.version = {}

    function Data(){
        this.value = null;
    }
    Data.prototype.set = function(val){
            this.value = val;
     }

grab = https.get("https://ddragon.leagueoflegends.com/realms/na.json",(res)=>{
    info = '';
    value = {}

    t = new Data()

    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        info += chunk;
    })
    res.on('end', () => {
        try {
            value = JSON.parse(info); //Find a wy to pass this data around.
            t.set(value)
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
        }
    })
})

    setTimeout(()=>{ console.log("VERSIONS AFTER", grab.t);})
