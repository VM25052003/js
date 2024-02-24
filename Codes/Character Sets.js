let sqbracket1 = /sym[c-e]ol/ 
let str1 = 'symbol' //false as b doesn't lie between c-e
console.log(sqbracket1.test(str1) + 'as \'[]\'] means expression will match if string contains any characters mentioned in []. Eg - [a - z] means anything beteen a to z can come here; [pqrs] - p/q/r/s can come here') 


let sqbracket2 = /sym[^c-e]ol/ 
let str2 = 'symbol' //true as b doesn't lie between c-e
console.log(sqbracket2.test(str2) + 'as \'[^ ]\']means expression will not match if string contains any characters mentioned in []. Eg - [^a - z] means anything beteen a to z can\'t come here; [^pqrs] - p/q/r/s can\'t come here')

let sqbracket3 = /sym[c-eA-D]o[^m0-9]/i
let str3 = 'symbol'
console.log(sqbracket3.test(str3) + 'as  [] can have characters from c - e or A - D but not m or 0 - 9 still true due to flag i' )

/*QUANTIFIERS*/
let parenthesis1 = /symb{0,2}ol/ //b can occur 0/1/2 times in any order
let parenthesis2 = /symb{2}ol/   //b can occur 2 times consecutively
let parenthesis3 = /(symb){2}ol/ //Grouping() of 'symb' such that it can occurs 2 times 
let str4 = 'symbolb {} means charcters after with {} is applied can occur no. of times as specified in {}'
console.log(parenthesis1.test(str4))
console.log(parenthesis2.test(str4))
console.log(parenthesis3.test(str4))