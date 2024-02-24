//Async will simply return a promise. So, inside this async, we can wait for a promise to resolve. Earlier, while using fetch() we have to use 2 .then(), but with async, we don't need to use them
async function hello(){
    console.log('Inside hello()')
    const response = await fetch('https://api.github.com/users')
    console.log('Before response')
    const users = await response.json()   //response.json() also returns a promise
    console.log('Users resolved')
    return users
}
//Async returns a promise and it's return value is waiting to be resolved. But inside, another promise is awaiting to be resolved
console.log('Before calling hello')
let fun1 = hello()
console.log('After calling hello through fun1')
console.log(fun1)
fun1.then(data => console.log(data))
console.log('Last line of js file')


/*
Before calling hello                           
//Starts from this line
Inside hello()                                     
//Goes inside hello() and prints this
After calling hello through fun1  
//As saw 'await' comes out of hello() and comes out to continue executing remaining file 
Promise {<pending>}                      
//It will be resolved once hello() is completely done
Last line of js file           
//As hello() still not done, fun1.then() isn't executed         
Before response                
//All pending work is completed, hence hello() starts execution again
Users resolved
Array(30) */