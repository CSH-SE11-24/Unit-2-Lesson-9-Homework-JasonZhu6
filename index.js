// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let num = parseInt(prompt("Enter a number: "))

// Prompt the user for another number that is bigger than the first number and cast it to a number
let num2 = parseInt(prompt("Enter another number that is bigger than the first one: "))

// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number
for (; num <= num2; num++) {
  console.log(num)
}

// PART 2: Averaging an array
// Create an array of numbers 
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Write a for loop that calculates the sum of the elements 
let sum = 0

for (let index = 0; index < numList.length; index++) {
  sum = sum + numList[index]
}

console.log(`The sum of this array is ${sum}.`)

// Using the sum, calculate the average of all the elements (sum divided by the length of the array)
let average = sum / numList.length

console.log(`The average of this array is ${average}.`)
