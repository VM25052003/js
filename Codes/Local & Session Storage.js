/* Add a key-value pair in local storage 
Name1, 2 is key and Vidhi, VM is value */
localStorage.setItem('Name1', 'Vidhi') //length = 1
localStorage.setItem('Name2', 'VM')    //length = 2
localStorage.setItem('Name3', 'Mathur') //length = 3


let vArr = ['Tomato', 'Onion', 'Mushroom']
localStorage.setItem('Veggies', vArr) //Converts Array to String to store in memory, so instead use 
localStorage.setItem('Veggies', JSON.stringify(vArr))
 

//Prints demanded element through key value
console.log(localStorage.getItem('Name1'))
console.log(localStorage.getItem('Veggies'))  //Looks like array but actually a string
console.log(JSON.parse(localStorage.getItem('Veggies'))) //This is array

/* Clear the entire local Storage - localStorage.clear() */


// Removes a certain key-value pair in local storage
localStorage.removeItem('Name3')


//Stored only this sesssion expires, means tab is closed; unlinke local storage
sessionStorage.setItem('SName1', 'Vidhi') 
sessionStorage.setItem('SName2', 'VM')  
sessionStorage.setItem('SVeggies', JSON.stringify(vArr))