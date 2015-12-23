module.exports = function(api){
    this.cache = {}
    var that = this;

    opt = {
        locale: "en_US",
        itemListData: ["all"],
        region: "na"
    }

    api.getItemData(opt).then((res)=>{
        that.cache.items = res;
        console.log(res);
    })
    api.getChampionData(opt).then((res)=>{
        that.cache.champs = res;
        console.log(res);
    })

    return this.cache
}
