//this is the higher order function
function outer (cbf) {
  cbf()
}

// this is the inner/callback function
// function inner() {
// console.log("This is the inner function")
// }

// outer(inner)

// or use inline function- must be an anonymous function

outer(() => {
  console.log('this is the inner function')
})

// -----------.forEach()-------------------------//
let nums = [1, 2, 3, 4, 5]
console.table(nums)
// This is how to solve with for loop
// for (let i = 0; i < nums.length; i ++) {
//     console.log(nums[i], "is at index ", i)
// }
// .forEach(callback) //takes up to 3 arguments
nums.forEach((element, index) => {
  console.log(`${element} is at index ${index}`)
})
// sum of nums array
let sum = 0

nums.forEach(number => {
  sum += number
  console.log(sum)
})
console.log(sum)

let colors = ['red', 'green', 'blue', 'yellow', 'white', 'purple', 'red']

let colorsCount = {}
colors.forEach(color => {
  if (colorsCount[color]) {
    colorsCount[color]++
  } else {
    colorsCount[color] = 1
  }
})
console.log('Colors Count: ', colorsCount)

// -----------.map()-------------------------//
let nums2 = [1, 2, 3, 4]
// we are going to mulitply each number by 2 using .map()
console.log('Nums2 Array: ', nums2)
let nums2Times2 = nums2.map(num => {
  return num * 2
})

console.log('Nums2Times2 Array: ', nums2Times2)
// subtract each number by 1 using callback function not an inline callback
function cbf (num) {
  return num - 1
}

let nums2Minus1 = nums2.map(cbf)
console.log('Nums2Minus1 Array: ', nums2Minus1)
// -----------.filter()-------------------------//
let numsArr = [8, 6, 7, 5, 3, 0, 9]
console.table(numsArr)
// filter the numsArr array to get the odd numbers by using for-loop
let forLoopArr = []
for (let i = 0; i < numsArr.length; i++) {
  numsArr[i] % 2 === 1 ? forLoopArr.push(numsArr[i]) : null
}
console.log('ForLoopArr: ', forLoopArr)

// filter numsArr by using .filter method

let filterOddNums = numsArr.filter(num => {
  return num % 2 === 1
})
console.log('FilterOddNums: ', filterOddNums)

// filter an array of objects using .filter()

const cars = [
  { name: 'honda civic', price: 30000 },
  { name: 'toyota corolla', price: 35000 },
  { name: 'kia rio', price: 25000 },
  { name: 'tesla x', price: 60000 },
  { name: 'honda pilot', price: 45000 },
  { name: 'chevy bolt', price: 40000 },
  { name: 'ford focus', price: 20000 }
]
// filtering cars that are >= 30000
let filterCars = cars.filter(car => {
  return car.price >= 30000
})
console.log('Filter Cars: ', filterCars)

// Filtering by Honda cars using .filter()
let hondaCars = cars.filter(car => {
  return car.name.includes('honda')
})
console.log('Honda Cars: ', hondaCars)
// -----------.reduce()-------------------------//

let numbersArr = [0, 1, 2, 3, 4, 5]

//Get the sum of the numbersArr using .reduce()

let reduceSum = numbersArr.reduce((accumulator, currentValue) => {
  console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`)
  return accumulator + currentValue
}, 0)
console.log('Reduce Sum: ', reduceSum)

//-----------------CHAINING METHODS-------------------//

//Get the sum of Honda cars from the cars array above

let hondaSumPrice = cars.filter(car => car.name.includes("honda")).reduce((acc, curr) => {
    return acc.price + curr.price
})
console.log("Honda Sum Price: ", hondaSumPrice)