//Pretend this is coming from server as response
let x = 'Hello'
x = undefined            //No error
if (x != undefined){
    throw new Error('This is defined')
}
else{
    console.log('This is undefined')
}



//If there is error in try block, then it will catch and won't throw error
try {
    functionHello();
    throw new Error('Hello does not exist')
} catch(error) {
    console.log('Hello() doesn\'t exist, so this is printed instead of throwing error')
    console.log(error)          //This prints error word to word in console
    console.log(error.name)     //What type of error (reference error here)
    console.log(error.message)  //Message in error
} finally{
    console.log('This will run, no matter error is there or not')
}