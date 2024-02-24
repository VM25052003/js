// Primitive data types
let NaMe = 'vidhi'; // Name already declared
console.log("My name is " + NaMe)
console.log('Data type of Name is ' + typeof Name)

let marksN = 34;
console.log('Data type of 34 is ' + typeof marksN)

let marksS = '34'
console.log("Data type of '34' is " + typeof marksS)

let isBoolean = true
console.log('Data type of isBoolean is ' + typeof isBoolean)

let nullValue = null;
console.log('Data type of nullvalue is ' + typeof nullValue) 
// null is primitive datatype but its bogus return value is object

let undef = undefined;
console.log('Data type of undef is ' + typeof undef)

// Reference data types 
let myArray = [1, 2, 3, 4, false, 'string']
console.log('Data type of myArray is ' + typeof myArray)

let stMarks = {
    aman: 29,
    Zian: 21,
    Meera: 48
} 
// {} in object literals, [] will give error
console.log(stMarks)
console.log('Data type of stMarks is ' + typeof stMarks)

function thisFun(){}
console.log('Data type of thisFun is ' + typeof thisFun)

let date = new Date()
console.log(typeof date + ' as datatype')