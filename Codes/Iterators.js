const fruitArray = ['Apples', 'Mangoes', 'Oranges', 'Grapes']
console.log('My array is ', fruitArray)

function fruitIterator(kuchBhi) {
    let nexti = 0
    return {                //Returning an object which contains function 'next'
        next: function () {
            if (nexti < kuchBhi.length) {          //'Next' function returns below object
                return{
                value: kuchBhi[nexti++],    //All values 'kuchBhi' in array are not finished, so false
                done: false       
                      }
            }
        else{
            return{
            done: true                  //All values 'kuchBhi' in array are finished, so true returned
                  }
            }
        }   
    }
}
const fruit = fruitIterator(fruitArray)
console.log(fruit.next())   //Returns Applea
console.log(fruit.next())   //Returns Mangoes
console.log(fruit.next())   //Returns Oranges
console.log(fruit.next())   //Returns Grapes
console.log(fruit.next())   //Returns 'done' as Array is finished, .value after 'Grapes' would give undefined