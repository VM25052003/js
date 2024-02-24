let username = document.getElementById('username')
let email = document.getElementById('email')
let phone = document.getElementById('phoneNo')
let validUsername = false
let validPhoneNo = false
let validEmail = false

username.addEventListener('blur', () =>{
    console.log('Name is blur')
    //validate name here
    let nameregex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;    
    let strN = username.value;
    console.log(nameregex, strN)
if(nameregex.test(strN)){
        console.log("username matched")
        username.classList.remove('is-invalid') //If username is valid, remove is-invalid class
        validUsername = true
    }
    else{
        console.log("username does not match")
        username.classList.add('is-invalid') //If username is invalid, add is-invalid class
    }
})

email.addEventListener('blur', () =>{
    console.log('email is blur')
     //validate email here
     let emailregex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;  
     let strE = email.value;
    console.log(emailregex, strE)
if(emailregex.test(strE)){
        console.log("email matched")
        email.classList.remove('is-invalid') //If username is valid, remove is-invalid class
        validEmail = true
    }
    else{
        console.log("email does not match")
        email.classList.add('is-invalid') //If username is invalid, add is-invalid class
    }
})

phone.addEventListener('blur', () =>{
    console.log('phone is blur')
     //validate phone here
     let phoneregex = /^[0-9]{10}$/;    
    let strP = phone.value;
    console.log(phoneregex, strP)
if(phoneregex.test(strP)){
        console.log("phone matched")
        phone.classList.remove('is-invalid') //If username is valid, remove is-invalid class
        validPhoneNo = true
    }
    else{
        console.log("phone does not match")
        phone.classList.add('is-invalid') //If username is invalid, add is-invalid class
    }
})


let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault()

    console.log('You clicked on Submit')

    if(validUsername && validPhoneNo && validEmail){
    console.log('Username, Email and Phone Node. are valid. Submitting the form')
    
    let success = document.getElementById('success')
    success.classList.add('show')     
    // failure.classList.remove('show')  //Method1F
    // $('#failure').alert('close')      //Method2F
    $('#failure').hide()                 //Method3F
    $('#success').show()                 
    }

    else{
    console.log('One of Username, Email and Phone Node. are invalid. Not submitting the form. Try again after correcting the errors')
    
    let failure = document.getElementById('failure')
    failure.classList.add('show')
    // success.classList.remove('show')   //Method1S
    // $('#success').alert('close')       //Method2S
    $('#success').hide()                  //Method3S
    $('#failure').hide()                  
    }
})