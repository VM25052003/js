//CREATE
let create = document.createElement('li')
create.className = 'Child ONE'
create.id = 'Child 1'
create.setAttribute('title', 'This is title')            
create.innerHTML = '<b>This is added</b>'                 //Method 1
let text = document.createTextNode('This is also added')  //Method 2
create.appendChild(text)
/* create.appendChild( document.createTextNode('This is also added')) 
Another way to add text*/ 
console.log(create)

let C5 = document.querySelector('ul.Sports')  //First ul with class sports
C5.appendChild(create) //Appends child element in DOM
console.log(C5)
 

//REPLACE
let element1 = document.createTextNode('This replaces innerHTML')
create.replaceWith(element1)
let element2 = document.getElementById('total4')

let replacement = document.createElement('li')
replacement.innerHTML = '<li>This is replacement</li>'
element2.replaceChild(replacement, document.getElementById('No1')) //replaces 'Child 1 Cricket' 


//REMOVE
element2.removeChild(document.getElementById('No2')) //Removes child 4
console.log(create.hasAttribute('ti')) // T/F based on whether element contains attribute or not
create.removeAttribute('class')
create.setAttribute('title', 'This is new title')
