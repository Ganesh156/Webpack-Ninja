//Importing add number and subtract number function from index file.
const {add:addNumber,subtract} = require('./functions')

//Local function
function add(){
    console.log('Addition function')
}

// add Function with alias name addNumber
const addFunction = addNumber(2,5)

const subtractFunction = subtract(9,4)

//Printing values
add()
console.log(addFunction)
console.log(subtractFunction)