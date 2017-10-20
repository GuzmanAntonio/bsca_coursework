function Guesser(number, lives){
    this.number = number
    this.lives = lives
}

Guesser.prototype.guess = function(n){
    if(n > this.number){
        console.log(`${n} is too big`)

        if(this.lives !== 0){
            this.lives = this.lives -1
            console.log(`You have ${this.lives}`)
        } else {
            console.log(`Oops! You do not have anymore lives`)
        }

    } else if(n < this.number){
        
        if(this.lives !== 0){
            this.lives = this.lives -1
            console.log(`You have ${this.lives}`)
        } else {
            console.log(`Oops! You do not have anymore lives`)
        }
       
    } else if (n === this.number){
        console.log(`${n} is the correct number`)
    }
}

const myGuess = new Guesser(10, 8)

myGuess.guess(20)
myGuess.guess(15)
myGuess.guess(11548545215)
