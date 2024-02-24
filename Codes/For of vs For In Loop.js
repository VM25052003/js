//Iterationg an object using traditional for loop
people = ["ABCD", "EFGH", "IJKL", "MNOP", "PQRS" ]                  //Method1
for (let index = 0; index < people.length; index++) {
    const name = people[index];
    console.log(name)
}
let obj = {
    name: 'TUV',
    age: 25,
    city: 'kolkata',
    language: 'python',
    framework: 'Django',
}
//Object.keys returns name, age, city, language and framework 
for (let index = 0; index < Object.keys(obj).length; index++) {     //Method2
    const element = obj[Object.keys(obj)[index]];
    console.log(element)
}



//Iterationg an object using traditional for in loop
//Can't write obj.key as key is a string
for (const key in obj) {                                           //Method1
        console.log(obj[key]) 
}
myStr = 'This is a string'
for (const idx in myStr) {
        console.log(myStr[idx])
}


//Iterationg an object using traditional for of loop
for (const idx of myStr) {
        console.log(idx)
}

