//Reference datatype, so typeOf - Object
console.log(new Date()) 
//Returns date, day, month, year and time

console.log(new Date('18-9-2022'))
console.log(new Date('Sept 18 2022'))
console.log(new Date('18/09/2022')) //'DD/MM/YYYY' format is invalid 
console.log(new Date('09/18/2022'))

let y = new Date('09/18/2022')
console.log(y.getDate())
console.log(y.getDay()) // 0 for Sunday
console.log(y.getTime()) //Number of seconds since 1.1.1970