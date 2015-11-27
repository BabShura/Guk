var https = require('https');
exports.version = {}

    function data(){
        this.value = null;
    }
    data.prototype.set = function(val){
            this.value = val;
     }
     
https.get("https://ddragon.leagueoflegends.com/realms/na.json",(res)=>{
    info = '';
    value = {}
    d = new data();

    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        info += chunk;
    })
    res.on('end', () => {
        try {
            value = JSON.parse(info); //Find a wy to pass this data around.
            d.set(value)
        } catch (err) {
            console.error('Unable to parse response as JSON', err);
        }
    })
    setTimeout(()=>{ exports.version = d.value ; console.log(exports.version);})
})

    setTimeout(()=>{ console.log("VERSIONS AFTER", exports.version);})
