/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.
*/

//Creating a new element
let divElem = document.createElement('div')

//Add text to created element
let addTxt = localStorage.getItem('text')
if (addTxt == 0){
    let text = document.createTextNode('Click to edit this element ')
}
else{
    let text = document.createTextNode(addTxt)
}
divElem.appendChild(text)

//Giving element id, style and class
divElem.setAttribute('id', 'elem')
divElem.setAttribute('class', 'elem')
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding: 34px;')

//Grab main container
let container = document.querySelector('.container')
let first = document.getElementById('FC')

// Insert the element before element with id first
container.insertBefore(divElem, first)
divElem.appendChild(text)
console.log(divElem, container, first)

//Add event listener to divElem
divElem.addEventListener('click', function(){
    let noTextArea = document.getElementsByClassName('textarea').length
    if (noTextArea == 0){
        let html = divElem.innerHTML
        divElem.innerHTML= `<textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`
    }

    //listen for the blur event on textarea
    let textArea = document.getElementById('textarea')
    textArea.addEventListener('blur', function(){
        elem.innerHTML = textArea.value
        localStorage.setItem('text', textArea.value)
    })
})