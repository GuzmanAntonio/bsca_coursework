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

//console.log(pluralProducts);

const objectProducts = pluralProducts.map(product => {
    const newProduct = {name: product}
    return newProduct
})

console.log(objectProducts);