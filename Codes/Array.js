const Marks = [25, 30, 30, 45]
const Fruits = ['Apple', 'Orange', 'Pineapple']
const mixed = [25, 'Orange', 'x', ['Apple', 25]] //Array within an array using [] within []
const mixed1 = new Array(23, ['Guava', 'w']) //Using new, Array within an array with [] within ()
console.log(Marks)
console.log(Fruits)
console.log(mixed)
console.log(mixed1)
console.log(mixed1[1]) //Will print both 'Guava', 'w'
console.log(mixed.length)
console.log(Array.isArray('25')) //Checks whether is Array or not
console.log(Array.isArray(Fruits))
Fruits[2] = 'Mango'
console.log(Fruits) //Replaced pineapple with mango
Marks.push(Fruits) //Adds at last
Marks.unshift(50, 2) //Adds at start
console.log(Marks)
Marks.pop() //Removes last element
Marks.shift() //Removes first element
console.log(Marks)
Marks.splice (1,3) //Removes 3 elements starting from index 1(exclusive)
console.log(Marks)
Marks.reverse()
console.log(Marks)

let Mixed = [25, 'Orange', 'x', ['Apple', 25]] 
let Mixed1 = new Array(23, ['Guava', 'w'])
Mixed = Mixed.concat(Mixed1) //Can't concatenate if const variable
console.log(Mixed)

//JS OBJECTS
let user1 = new Object(); // "object constructor" syntax
let user2 = {}; // "object literal" syntax
let user = { 
    name: "Harry", // by key "name" store value "Harry"
    age: 25, // by key "age" store value 25
    language: "JavaScripts" // by key "language" store value “ JavaScript”
  };
  console.log(user)