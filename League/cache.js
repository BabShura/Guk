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
        console.log("CACHE item", JSON.stringify(that.cache))
    })
    api.getChampionData(opt, (err, res)=>{
        that.cache.champs = res;
        console.log("CACHE champ", JSON.stringify(that.cache))
    })

    setTimeout(()=>{
        console.log("CACHE", JSON.stringify(that.cache))
        app.set("cache", that.cache)
    })
}
