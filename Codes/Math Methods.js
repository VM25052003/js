let x = 4
let y = 3
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)  //You get exact value, not integer
console.log(Math) //Display list of all math functions
console.log(Math.round(5.2))  //Returns number rounded to the nearest integer.
console.log(Math.ceil(5.2))   //Returns the smallest integer greater than/equal
console.log(Math.floor(-5.2)) //Returns the greatest integer less than or equal
console.log(Math.abs(-5.2))   //Returns absolute value
console.log(Math.random())  //lies between (0,1)
console.log(10 + (100-10)*Math.random())  //Generates random number between 10 - 100
/*To generate random number in range (a, b), then (a + (b-a)*Math.random()); while to generate a random integer, use Math.ceil(a + (b-a)*Math.random()) */