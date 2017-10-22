function Monster(name, diet, img){ //Blueprint
    this.name = name
    this.diet = diet
    this.img = img
}

const monsters = []

//console.log(monsters)

const jason = new Monster("Jason", ["Monster-Energy"], "https://images.moviepilot.com/image/upload/c_fill,h_470,q_auto:good,w_620/thccjea8bf0fa7rdv60y.jpg")
const freddy = new Monster("Fredrick Charles Freddy Krueger", ["Hopes", "Dreams"], "https://static.comicvine.com/uploads/original/11122/111225835/4773693-krueger+2.jpg")
const it = new Monster("Pennywise", ["children", "cotton candy"], "https://i.ytimg.com/vi/OAclBMuMSvo/maxresdefault.jpg")
const chucky = new Monster("Chucky", ["toys"], "https://www.destructoid.com//ul/464890-cult-of-chucky-finger.jpg")
const mike = new Monster("Michael Meyers", ["cupcakes", "waffles"], "https://vignette2.wikia.nocookie.net/villains/images/e/e3/MMH.jpg/revision/latest?cb=20150810215746")

monsters.push(jason, freddy, it, chucky, mike)

//console.log(monsters)

const monsterVue = {
    el: "#monster-app",
    data: {
        title: "Monster Mash",
        monsters: monsters
    },
}

new Vue(monsterVue)