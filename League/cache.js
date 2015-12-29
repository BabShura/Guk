var setCache = (data, app)=>{
    app.set("cache", data)
}

module.exports = (app, api, setCache)=>{
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

    setCache(this.cache, app)
}
