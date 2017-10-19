const tvChar1 = {
    name: "Spider Man",
    show: "Amazing Spider Man",
    rating: "Obviously a Super Hero"
}

const tvChar2 = {
    name: "Hulk",
    show: "Incredible Hulk",
    rating: "Smash"
}

const tvChar3 = {
    name: "Wolverine",
    show: "X-men",
    rating: "Clearly Rad"
}

function tvChar(name, show, rating){
    this.name = name
    this.show = show
    this.rating = rating
}
const SpiderMan = new tvChar("thing", "consistancy", "yourFriendInProgramming")
//console.log(SpiderMan);

function car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
}

const goodName = new car("BWM", "M5", 2005)
const goodName2 = new car("Toyota", "Prius", 2017)
const goodName3 = new car("VW", "Beetle", 1985)

//console.log(goodName, goodName2, goodName3)   

const createCar = () => {
    let result = []
    for(let x=0; x < 10; x++){
        const carObj = {
            make: "VW",
            model: "Rabbit",
            year: 2008
        }
        result.push(carObj)
    }
    return result
}
//console.log(createCar())

const createCar2 = () => {
    let result = []
    for (let x=0; x < 10; x++){
        result.push(new car("Ford", "Mustang", 1966))
    }
    return result
}
//console.log(createCar2())

function recipe(ingredients, instruction, time){
    this.ingredients = ingredients
    this.instruction = instruction
    this.time = time
}

const newRecipe = (numRecipe) => {
    let result = []
    for(let x=0; x<numRecipe; x++){
        result.push(new recipe({}, [], 0))
    }
    return result
}

const recipees = newRecipe(80)

recipees[40].ingredients.flour = "4 Cups"

console.log(recipees[40])


