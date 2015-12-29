module.exports = (app, api)=>{

    opt = {
        locale: "en_US",
        itemListData: ["all"],
        region: "na"
    }

    api.getItemData(opt, (err, items)=>{
         app.set("cacheItems", items)
         console.log(app.get("cacheItems"));
    })
    api.getChampionData(opt, (err, champs)=>{
        app.set("cacheChamps", champs)
    })
}
