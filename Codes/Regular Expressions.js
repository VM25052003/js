//Regular expressions are the patterns that are used to match character combinations in strings
let r1 = /regular/ //This is regular expression literal in js
console.log(r1)
console.log(r1.source) //Prints what is inside regular expression whithout '//'



//Function to match expression
let m1 = 'regular Tutorial about regular expessions in js'
console.log(r1.exec(m1))  
console.log(r1.exec(m1))  
/*exec() will return an array for match and null for no match. But if there would be 2 'regular' in 'match', it would return the first occuring only */



let r2 = /Regular/g
let m2 = '1st - Regular, 2nd - regular, 3rd - Regular'
console.log(r2.exec(m2))
console.log(r2.exec(m2))
console.log(r2.exec(m2))
/*To print both, we need to write g after 2nd '/'. g is a global flag, which means search globally. 
While printing for 1st time, 1st regular's index will be printed, for 2nd time, 2nd index will be printed. but for 3rd time, null is returned
similarly, i - case insensitive*/



console.log(r1.test(m2)) 
//test() returns true/false that indicates whether a pattern 'r1' exists in a string 'm2'.



let r3 = /Regular is/g
let m3 = '1st - Regular, 2nd - regular, 3rd - null'
console.log(m3.match(r3)) //Right syntax
// console.log(r2.match(m2)) //Wrong syntax
/*match() Matches a string and returns an array containing the results of that search, or null if no matches are found. 'Regular is' isn't present in m3*/




console.log(m3.search(r3)) //Right syntax
// console.log(r2.search(m2)) //Wrong syntax
/*search() Returns index of the first substring match or -1.*/




console.log(m3.replace(r2, 'replaced'))
/*replace() replaces r2 in m3 with 'replaced'. If r2 contains more than one 'Regular', use 'g' flag to replace all with 'replaced*/