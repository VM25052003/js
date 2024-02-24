/*[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(d) //Print all numbers from 4 to 10 as array due to '...' */
({a, b, c, ...d} = {a: 10, b: 20, c: 30, d: 40, e: 50, f:60})
console.log(a, b, c, d) 

//Creating an object 'laptop'
const laptop = {
    model: "HP Pavilion",
    age: '25 Days',
    colour: 'grey',
    start: function () { console.log('started')}
}
//Destructing 'laptop'
const {model, age, colour, start} = laptop
console.log(model, age, colour, start)
start()