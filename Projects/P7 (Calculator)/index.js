let screen = document.getElementById('screen')    //inputTag
buttons = document.querySelectorAll('button')
let screenValue = ''                              //string
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText                                             //Get text of button clicked
        if(buttonText == 'x'){                          //On pressing 'x', show '*' on screen
            buttonText = '*'     
            screenValue += buttonText
            screen.value = screenValue
        }
        else if(buttonText == 'C'){
            screenValue = ''
            screen.value = screenValue
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue)          //To evaluate screenValue
        }
        else if(buttonText == 'x'){
            buttonText = '*'
        }
        else{
            screenValue += buttonText
            screen.value = screenValue
        }
    })
}