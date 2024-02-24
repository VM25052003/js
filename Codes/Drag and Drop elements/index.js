/*the class Name you have added event, add ' hold' class to it (space in 'hold' as multiple classes are separated.)
Using setTimeout() with '0' means it is queued in last
dragstart - fired when the user starts dragging an item.
dragend - fired when a drag operation ends, such as releasing a mouse button or hitting the Esc key.
dragover - fired when a dragged item is being dragged over a valid drop target (may be its own place)
dragenter - when a dragged item enters a valid drop target.
drageleave - fired when a dragged item leaves a valid drop target
*/
const imgBox = document.querySelector('.imgBox')
const whiteBox = document.getElementsByClassName('whiteBox')


imgBox.addEventListener('dragstart', (e)=>{ 
e.target.className += ' hold'   //Displays red border on dragging
setTimeout(() => {
    e.target.className = 'hide' //Removes red border from original image
}, 0);  

})

imgBox.addEventListener('dragend', (e)=>{ 
e.target.className = 'imgBox'   //remove red border once 'dragend' is over
})

for (item of whiteBox) {
    item.addEventListener('dragover', (e) => {

e.preventDefault()              //If not used, won't be able to drop image
    })

    item.addEventListener('dragenter', (e) => {

console.log('dragenter has been triggered') 
e.target.className += ' dashed'  //Displays green background and dashed border when dropped image
    })

    item.addEventListener('dragleave', (e) => {

console.log('dragleave has been triggered') 
e.target.className = 'whiteBox'  //WhiteBox restored back once dropped image
    })

    item.addEventListener('drop', (e) => {
//drop -  fired when an item is dropped on a valid drop target
console.log('drop has been triggered')
e.target.append(imgBox)   //append image once 'drop' occured

    })
}