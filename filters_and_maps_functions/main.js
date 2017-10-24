let names = ["Elton John", "John Lennon", "Michael Jackson", "Billy Joel", "Led Zeppelin", "Elvis Presley", "Garth Brooks", "Tupac Shakur"]

//map names to objects
// ie (Elton John)
// Return results to mappedNames array

// var mappedNamesES5 = names.map(function(name){
//     var rockStar =  {name: name};
// })

// console.log(names)


const mappedNames = names.map((name) => {
    let rockstar = {name: name}
    return rockstar
})

//console.log(mappedNames)

//map through jus the first names 
//return an array of the artist's first names

const mappedFirstNames = names.map(name=> name.split(" ")[0])
//console.log(mappedFirstNames)

//call filter on names array
//return only artists who's first names begin with "J"

let filtersNamesJ = names.filter(name => name[0] === "J")
//console.log(filtersNamesJ)

//Chaining Methods
// a.methodOne().methodTwo()
//Return an array of artists who's first names bigin with "E"

let firstNamesE = names.filter(name => name[0] === "E").map(name => name.split(" ")[0])
//console.log(firstNamesE)

let shapes = [
    { name: "square", color: "green", sides: "four"},
    { name: "triangle", color: "red", sides: "three"},
    { name: "rectangle", color: "blue", sides: "four"},
    { name: "pentagon", color: "yellow", sides: "five"},
    { name: "hexagon", color: "orange", sides: "six"}
]

//call map on the shapes array.  
//return new array of just shape names.

const shapeNames = shapes.map(shape => shape.name)
//console.log(shapeNames)

//Call Filter on the shapes array
//Return new array of only green color

const shapesGreen = shapes.filter(shape => shape.color === "green")
//console.log(shapesGreen)

//call filter to see if a shape has less than four sides

const shapeSides = shapes.filter(shapes => shapes.sides < 4)
console.log(shapeSides)

