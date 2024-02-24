const Num = 35 // To check whether variable is defined or not
if (typeof Num == 'undefined' ) {
    console.log('Num is undefined')
}
else { 
    console.log('Num is defined')
}

const age = 15
const doesDrive = true
if (doesDrive && age> 18){
    console.log('You can drive')
}
else{
    console.log('You can\'t drive')
}

//SWITCH CASE
switch (age) { 
    case 18:
        console.log('You are 18')
        break
    case 28:
        console.log('You are 28')
        break
    case 38:
        console.log('You are 38')
        break
    default:
        console.log('Invalid')
}