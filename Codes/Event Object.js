/* document.getElementById('heading').addEventListener('click', function(fun){
console.log("You clicked on 'Hello'")   //1 - Simply print so if clicked 
// location.href = 'https://Amazon.in'     //2 - Redirect to different side if clicked
console.log(fun)
console.log(fun.target.id)
console.log(fun.target.className)
console.log(Array.from(fun.target.classList))
console.log(fun.offsetX)
console.log(fun.offsetY)
}) */

let s1 = document.getElementById('sub1')
s1.addEventListener('click', S1)
function S1(s){   //s is event object
    console.log('thanks', s)
    s.preventDefault() //It prevents the default behaviour of 'submit' 
}
s1.addEventListener('dblclick', S2)
function S2(s){
    console.log('thanks for double click', s)
    s.preventDefault() //It prevents the default behaviour of 'submit' 
}
s1.addEventListener('mousedown', S3)
//responds to mouse's left & right button and scroll wheel while click/ dblclick doesn't. Also when button is pressed and released in button itself 
function S3(s){
    console.log('thanks for mousedown', s) 
    s.preventDefault() //It prevents the default behaviour of 'submit' 
}

let s2 = document.querySelector('#Cont')
s2.addEventListener('mouseenter', S4)
function S4(s){
    console.log('You entered submit using mouseenter', s)
}
s2.addEventListener('mouseleave', S5)
function S5(s){
    console.log('You exited submit using mouseleave', s)
}
s2.addEventListener('mousemove', S6)
function S6(s){
    document.body.style.backgroundColor = `rgb(${s.offsetX}, ${s.offsetY}, 255`
    console.log('You triggered mousemove', s)
}