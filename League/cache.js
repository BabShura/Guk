    exports.items= (api)=>{
        this.cache = {}
        var that = this;

        opt = {
            locale: "en_US",
            itemListData: ["all"],
            region: "na"
        }

        api.getItemData(opt).then((res)=>{
            that.cache = res;
        })
        return this.cache

    }

    exports.champs= (api)=>{
        this.cache = {}
        var that = this;

        opt = {
            locale: "en_US",
            itemListData: ["all"],
            region: "na"
        }

        api.getChampionData(opt).then((res)=>{
            that.cache = res;
        })

        return this.cache

    }
