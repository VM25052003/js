// TYPECONVERSION
let typeNumber = 40
console.log(typeNumber, (typeof typeNumber))

let typeString = String(40)
console.log(typeString, (typeof typeString))

let typeBoolean = Boolean(40)
console.log(typeString, (typeof typeBoolean))

let typedate = new Date()
console.log(typedate, (typeof typedate))

let typeString1 = String(new Date())
console.log(typeString1, (typeof typeString1))

let typeArray = [1, 2, 3, 4, 5]
console.log(typeArray, typeArray.length, (typeof typeArray))

let typeString2 = String([1, 2, 3, 4, 5])
console.log(typeString2, typeString2.length, (typeof typeString2))
// , also included along with 1 - 5

let typeNumber1 = 50
console.log(typeNumber1.toString())
// Another way to convert to string
/* Typeconversion of false as "Number" datatype gives 0 and True as 1; if there is a problem in converting to "Number" datatype, it will display 'NaN' (Not a number) 
Null is considered as 0 when used with numbers*/

let typeNumber2 = Number('39.981')
console.log(typeNumber2, (typeof typeNumber2))

let typeNumberP = parseInt('39.981')
console.log(typeNumberP, (typeof typeNumberP))
// "Number" converts only datatype, but parseInt gives nearest integer value along with "Number" as datatype

// TYPE COERCION
let str1 = '999'
let num1 = 1
console.log(str1 + num1)
// Concatenates number to string

let str2 = '999'
let num2 = String(1)
console.log(str2 + num2)
// Type converted from number to string and then 


let str3 = Number('999')
let num3 = 1
console.log(str3 + num3)
// Type converted from string to number and then added