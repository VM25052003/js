const name = "Vidhi"
const Greet = 'Good Morning'
console.log(Greet + ' ' + name)

let intro = "My Name " + "is " 
intro = intro.concat('Vidhi Mathur')
console.log(intro)
console.log(intro.toLowerCase())
console.log(intro.toUpperCase())
console.log(intro.length)
console.log(intro[3], intro[4], intro[5], intro[6]) // Gives chararter at specified index
console.log(intro.charAt(3))
console.log(intro.indexOf('Name', 'Vidhi')) //First occurence of Name is at index[3]
console.log(intro.lastIndexOf('a')) //Last occurence of a at index[18]
console.log(intro.endsWith('r'))    //check whether ends with string 'r' 
console.log(intro.startsWith('m'))  //check whether starts with string 'my' 
console.log(intro.includes(' ')) 
console.log(intro.search('Vidhi')) 
console.log(intro.substring(3, 7)) // returns character at spectified index from 3(inclusive) - 7(exclusive)
console.log(intro.substring(-7)) // returns whole string instead of last 7 characters
console.log(intro.substring(4)) // returns from to 4 to end of string
console.log(intro.substring(0, 4)) // returns from 0 to 4 
console.log(intro.slice(3, 7)) // returns character at spectified index from 3(inclusive) - 7(exclusive)
console.log(intro.slice(-7)) // returns last 7 characters
console.log(intro.slice(4)) // returns from 4 to end of string
console.log(intro.slice(0, 4)) // returns from 0 to 4 
console.log(intro.split('a')) // Splits from character 'a' in each word and return it as array. Means when 'a' exist, it breaks and searches for next word
console.log(intro.replace('My Name is', ' '))

//TEMPLATE LITERALS
let f1 = 'Apple'
let f2 = 'Mango'
let fruitlist = `Hello ${name}
                <h3>list of Fruits you like </h3> 
                <p>${f1} and ${f2}`
//replace the entire content of the current webpage's body element with the contents of the fruitlist
document.body.innerHTML = fruitlist