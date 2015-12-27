module.exports = (app, api)=>{
    this.cache = {items:{}, champs:{}}
    var that = this;

    opt = {
        locale: "en_US",
        itemListData: ["all"],
        region: "na"
    }

    api.getItemData(opt, (err, res)=>{
        that.cache.items = res;
    })
    api.getChampionData(opt, (err, res)=>{
        that.cache.champs = res;
    })

    setTimeout((data)=>{
        console.log("CACHE", JSON.stringify(data.champs.keys))
        app.set("cache", data)
    }, 200 ,  this.cache)
}
