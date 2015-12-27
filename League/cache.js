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

    setTimeout(()=>{
        console.log("CACHE", that.cache.champs.data.Aatrox.tags)
        app.set("cache", that.cache)
    })
}
