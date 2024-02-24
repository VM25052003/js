//Promise has 3 cases - resolve, reject and pending
/* Func1 is a function which promises user, if promise is fulfilled, print (1) and use resolve() (3), if not, print (2) and run reject() (4)
We use then and catch method of promise as a substitute for callback */
function fun1(){
    return new Promise(function (resolve, reject) {
       setTimeout(() => {
        const error = true
        if (!error){
        console.log('Function: Your promise has been resolved') //1
        resolve()
        }
        else{
        console.log('Function: Your promise has been rejected') //2
        reject('Sorry not fulfilled')
        }
       }, 2000); 
    })
}
fun1().then(function(){
    console.log('XYZ: Thanks for resolving') //3
}).catch(function(){
    console.log('XYZ: Very bad bro')
})