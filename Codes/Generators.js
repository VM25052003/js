function* numGen1(){                 //Generator syntax = function*
let i = 0                           //Method1
yield 1
yield 2
yield 3
yield 4
}
const gen1 = numGen1()
console.log(gen1.next())  
//yield is a keyword and when we call numGen(), generate 1, 2, 3, 4. When printed, returned 1 and false as some more values are remaining to 'yield'
console.log(gen1.next()) 
console.log(gen1.next()) 
console.log(gen1.next()) 
console.log(gen1.next()) //Undefined and true as all values are printed

function* numGen2(){                //Method2
    let i = 0
    while(true){
        yield ++i
    }
}
const gen2 = numGen2()
console.log(gen2.next()) 
console.log(gen2.next()) 
console.log(gen2.next()) 
console.log(gen2.next()) 
console.log(gen2.next()) 
console.log(gen2.next().value)  //Returns an object, to return value(int type here), use '.value'
