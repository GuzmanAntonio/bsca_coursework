const storeInventory = [
    {name: "Catcher in the Rye", author: "J.D. Salinger", price: 10.00, genre: "Adult Fiction"},
    {name: "The Wind-Up Bird Chronicles", author: "Haruki Murakami", price: 15.00, genre: "Adult Fiction"},
    {name: "The Unbearable Lightness of Being", author: "Milan Kundera", price: 14.00, genre: "Adult Fiction"},
    {name: "Harry Potter: The Sorcerers Stone", author: "J.K. Rowling", price: 22.00, genre: "Youth Fiction"},
    {name: "In Cold Blood", author: "Truman Capote", price: 14.00, genre: "Non-Fiction"},
    {name: "A Brief History of Time", author: "Stephen Hawking", price: 18.00, genre: "Non-Fiction"},
    {name: "The Emperor of All Maladies", author: "Siddhartha Mukherjee", price: 20.00, genre: "Non-Fiction"},
    {name: "The Structure of Scientific Revolutions", author: "Thomas S. Khun", price: 16.00, genre: "Non-Fiction"},
    {name: "A Wrinkle in Time", author: "Madeleine L Engle", price: 14.00, genre: "Youth Fiction"},
    {name: "The House of the Scorpion", author: "Nancy Farmer", price: 16.00, genre: "Youth Fiction"},
    {name: "Mastering the Art of French Cooking", author: "Julia Child", price: 24.00, genre: "Food/Cooking"},
    {name: "Antifragile", author: "Nassim Nicholas Taleb", price: 20.00, genre: "Philosophy"}
  ]

  const challOne = storeInventory.map((cookies) => {
    return `${cookies.name} is by ${cookies.author} and is $${cookies.price}`
  })

  //console.log(challOne)

  const newFunc =(arr)=>{
    let challTwo = arr.map((cookies) => {
        return `${cookies.name} is by ${cookies.author} and is $${cookies.price}`
    })
    return challTwo
  }
  //console.log(newFunc(storeInventory))

  const onlyNfiction = storeInventory.filter((noFcition) => {
    return noFcition.genre === 'Non-Fiction'
  })
  //console.log(onlyNfiction)

  const challThree = (arr, price) => {
    let fiveTeen = arr.filter((stuff) => {
      return stuff.price === price
  }).map((name) => {
      return name.name
  })
  return fiveTeen
}
//console.log(challThree(storeInventory, 10))

const shoppingCart = []

const addBook = (nameBook) => {
    const book = storeInventory.filter((book) => {
        return book.name === nameBook
    })
    shoppingCart.push(book[0])
}
addBook("Antifragile")
addBook("Catcher in the Rye")
addBook("A Brief History of Time")

const totalPrice = (arr) => {
    let totalPrice = 0
    for(let x=0; x < arr.length; x++)
    totalPrice += arr[x].price
    }
    return totalPrice
})
//console.log(shoppingCart)

const printShoppingCart = (arr) => {
    console.log(`****************Shopping Cart*****************`)
    for (let x=0; x < arr.length; x++){
        console.log(`${arr[x].name} is by ${arr[x].author} and cost $${arr[x].price}`)
    }
    console.log(`***********************************`)
}

printShoppingCart(shoppingCart)
