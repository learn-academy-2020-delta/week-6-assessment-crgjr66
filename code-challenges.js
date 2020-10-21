// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."
const sentenceMaker = (array) => {
  // use .map to go through each element in the array
  return array.map(value => {
    // convert name to array so we can go through each element
    let tempName = value.name.split(" ")
    // declare a temp array variable for the cap words, then go through and capitalize the names
    let capNameArray = []
    tempName.map(value => {
      capNameArray.push(value.charAt(0).toUpperCase() + value.substr(1))
    })
    // now put the sentence together and return it
    return capNameArray.join(" ").concat(" is a ", value.occupation, ".")
  })
}

console.log(sentenceMaker(people))


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const remNumbers = (array) => {
  // first we need to find the numbers only, put them in numArray
  let numArray = []
  // filter out anything not a number or modulo 3
  array.filter(value => {
    if (typeof value === "number") {
      numArray.push(value % 3)
    }
  })
  return numArray
}

console.log(remNumbers(testingArray1))
console.log(remNumbers(testingArray2))


// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const arrayNoDups = (array1, array2) => {
  // create a temp array to store the filtered elements of the first array, then filter the array and remove dups
  let new_array = array1.filter((value, index) => array1.indexOf(value) == index)
  // then traverse the second array and only add numbers
  // that dont exist in the first array
  array2.map(value => {
    for (let j = 0; j < new_array.length; j++) {
      if (!new_array.includes(value)) {
        new_array.push(value);
      }
    }
  })
  return new_array;
}

console.log(arrayNoDups(testingArray3, testingArray4))
