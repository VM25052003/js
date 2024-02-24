/*Set stores unique values
.add = adding values to set
.size = returns size of set
.has() = return boolean value depending on whether element is present/ not
.delete() = deletes an element from set*/
const mySet1 = new Set()                                                                 //Method1
mySet1.add('this')
mySet1.add('this will not add another \'this\' now as set accepts only unique values')
mySet1.add('this')
mySet1.add(34)
mySet1.add(true)
mySet1.add(false)
console.log(mySet1)

const mySet2 = new Set(['this', 'this', 34, true, true, {a: 4, b: 5}])                   //Method2
console.log(mySet2)
console.log(mySet2.size)
console.log(mySet2.has(15))
mySet2.delete('this')
console.log(mySet2)