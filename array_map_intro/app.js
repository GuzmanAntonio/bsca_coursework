const sevenProducts = ["Apple", "Anything", "Alfalfa", "Feta Cheese", "Happyness", "Dreams", "Joy"]

//console.log(sevenProducts);

const pluralizer = (productsIn) =>{
    for(let x=0; x < productsIn.length; x++){
        productsIn[x] +="s"
    }
    return productsIn
}

//console.log(pluralizer(sevenProducts));

const pluralProducts = sevenProducts.map(product => product + "s")

//console.log(objectProducts);

const numbers = [1,2,3,4,5,6,7,8,9];

const numArr = (arr) => {
    let doublesArray = []
    for(let x=0; x < arr.length; x++){
        doublesArray.push(arr[x]*2)
    }
    return doublesArray;
}
//console.log(numArr(numbers));

//ARRAY.map(function)
// const printNumbersMap = numbers.map(function(item){
//     const item*2
// })
// console.log(printNumbersMap)

// const printNumbersMap = numbers.map(number => {
//     return number*2
// })
// console.log(printNumbersMap)

const printNumbersMap = numbers.map(number => number*2)
//console.log(printNumbersMap)

const numbFunc = (arr) => {
    let newArr = []

    for (let x=0; x < arr.length; x++){
        newArr.push({ number: arr[x] * 2 });
    }
    return newArr
}
//onsole.log(numbFunc(numbers));

const numbFuncMap = numbers.map(n => {
    return {number: n * 2}
})

//console.log(numbFuncMap); 

const numsGreaterThanFive = (arr) => {
    let greaterThanFive = []
    for (let x=0; x < arr.length; x++){
        if(arr[x] > 5 && arr[x] < 9){
            greaterThanFive.push({number: arr[x]})
        }
    }
    return greaterThanFive
}
//console.log(numsGreaterThanFive(numbers));

const numsGreaterThanFiveFilter = numbers.filter(num => {
    return num > 5 && num < 9
})
//console.log(numsGreaterThanFiveFilter)

const mapsAndFilters = numbers.filter(numbers => {
    return numbers < 4
}).map(num => {
    return {number: num}
})

console.log(mapsAndFilters);