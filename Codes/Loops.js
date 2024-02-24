//For each loop
let pow2 = [1, 2, 4, 8, 16]
pow2.forEach(function(element){  // Apart from element, we can also pass index, array as arguments; separating 3 by , in()
    console.log(element)
})
for(let i = 0; i < pow2.length; i++){
    const element = pow2[i]
    console.log(element)
}

//For in loop
let obj = {
    name: 'Vidhi Mathur', //name, age, DOB, Language = key
    age: '19',            //Vidhi Mathur, 19, 25.05.03, Java = obj[key]
    DOB: '25 May, 2003',
    Language: 'Java'
}
for(let key in obj){
console.log(`The ${key} of object is ${obj[key]}`)
}