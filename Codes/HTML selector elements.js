//Single Element selector
let element = document.getElementById('heading')
// element = element.className
// element = element.childNodes   
// element = element.parentNode
console.log(element)

let classname = document.getElementsByClassName('child ONE')
console.log(classname)

element.style.color = 'green'; // Always use; here, otherwise colour the whole div 'container
element.innerText = 'sets/returns the text of specified node'
element.innerHTML = '<b>sets/returns the HTML content of an element.Can use HTML tags/ attributes here</b>'
console.log(element.innerHTML)


//QUERY SELECTOR
let selector1 = document.querySelector('#heading')
console.log(selector1)
let selector2 = document.querySelector('.child') 
console.log(selector2)
let selector3 = document.querySelector('div') //Only div at first get selected 
console.log(selector3)
let selector4 = document.querySelector('.container')
console.log(selector4.childNodes)
console.log(selector4.children)
// childNodes always counts/ include text, new lines and comments while children will only display elements
console.log(selector4.childNodes[0].nodeName) 
console.log(selector4.children[0].nodeName) 
console.log(selector4.childNodes[0].nodeType)
console.log(selector4.children[0].nodeType)
/* Node type is printed in form of number
1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType */
console.log(selector4.children[1].children[0].children[0]) 
//prints children of container at 1(child ONE), then its child at 0(Sports), then its child at 0(<li> Child 1 - Cricket</li>)
console.log(selector4.firstChild) 
console.log(selector4.firstElementChild) 
console.log(selector4.lastChild)
console.log(selector4.lastElementChild)

//Multi line selector
let element1 = document.getElementsByClassName('child')
console.log(element1[0])
console.log(element1[1])  //Printed 0,1 out of 4 elements of className 'Child'
let element2 = document.getElementsByClassName('container')
console.log(element2)    //only displayed container as a whole
console.log(element2[0]) //display each div inside it
console.log(element2[0].getElementsByClassName('child ONE')) //Print element from class container with class child ONE
console.log(element2[1]) //undefined