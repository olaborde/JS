// Arrow functions are important. You'll see more and more arrow functions in the future. We're also going to use them a lot in this course. Make sure you're familiar with them.

// For this lesson, do the following:

// Make a function named ten that takes in zero arguments and return the value 10. Try using both () and _ syntax.
const ten = _ => console.log(10) // with ()

ten()
// Make a function named logger that takes in one argument. It logs the argument you passed into it. Try it with and without parenthesis ().
const logger = (name) => {
  console.log(`your name is ${name}`)
}

logger('Big Joe')
// Make a function called add that adds two numbers together. Try it with and without implicit returns

const add = (number1, number2) => number1 + number2

const sumArrow = (num1, num2) => num1 + num2

console.log(sumArrow(3,4))

console.log(add(8,8))
// Make a function called multiply that multiplies two numbers together. Try it with and without implicit returns
const multiply = (num1, num2) => { return num1 * num2}

console.log(multiply( 5, -4))