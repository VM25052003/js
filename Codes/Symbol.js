/*Symbol are primitive type like String, boolean, undefined etc (not reference type) hence 'new' keyword isn't used as symbol isn't a constructor
Symbols are ignored in for-in loop
myObj.k1 / myObj["k1"] can't be used*/
const sym1 = Symbol('both are different')
const sym2 = Symbol('both are different')
console.log(sym1 === sym2) 
//Return false as each Symbol is unique (if we used String/Number instead of symbol, it would've returned true), hence they are used


const k1 = Symbol('If needed to debug, identifier used for A')
const k2 = Symbol('If needed to debug, identifier used for B')
myObj = {}
myObj[k1] = 'A'
myObj[k2] = 'B'
console.log(myObj)