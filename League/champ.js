exports.saybot = function(name, skin) {
    console.log("IN")
    league_v = http.get("https://ddragon.leagueoflegends.com/realms/na.json")
    console.log(league_v)




    champ = http.get("http://ddragon.leagueoflegends.com/cdn/" + league_v + "/data/en_US/champion/" + name + ".json")

    champ.img = {
        "load" : "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champ.name + "_" + champ_skin + ".jpg"
        "square" : "http://ddragon.leagueoflegends.com/cdn/" + league_v.champion + "/img/champion/" + champ.img.full
        "sprite" : "http://ddragon.leagueoflegends.com/cdn/" + leagu_v.champion + "/img/sprite/"

    }

    saybot = {
        "text": "Champ Info"
        "username": "LoL-champ"
        "icon_emoji": ":champ:"
    }


    return saybot
}
