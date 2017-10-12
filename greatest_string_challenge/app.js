const fallArray = [
    'pumpkin',
    'spice',
    'is',
    'very',
    'nice',
    'happy',
    'fall'
]

const greatestLength = (array)=>{
    let greatesLengthSoFar = 0;
    let indexWhereWordIs = 0;

    for(let x=0; x < array.length; x++){
       let currentLengthOfWord = array[x].length
       if(currentLengthOfWord > greatesLengthSoFar){
            greatesLengthSoFar = array[x].length;
            indexWhereWordIs = x;
        }
    }
    return `${array[indexWhereWordIs]} has the length of ${greatesLengthSoFar}`
}

console.log(greatestLength(fallArray));