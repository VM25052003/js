let a = window;
let b = window.document;
console.log(a) 
/*Display all content in window 
'window' is a global variable in JS, so we can whether write 'window.property()' or simply 'property()' */

alert('This is an alert')

p1 = prompt('Type your Email id')  
console.log(p1) 
console.log(prompt('This is another way'))
//Prints user reply in console of console.log; otherwise simply ask for reply but won't print

p2 = confirm('This is Boolean value, will return true/ false and print in console if asked')
console.log(p2)

console.log(innerHeight)       
console.log(window.innerHeight)
// Both mean the same thing; we also have innerWidth

console.log(scrollY) 
//How much we scrolled upward/ downward; similarly for scrollX, how much right/ left
console.log(menubar)
