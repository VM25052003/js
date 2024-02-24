let backslashw1= /s\wmbol/ 
let str1 = 's7mbols'
console.log(backslashw1.test(str1) + ' as \\w means word character, expression will match if string contains - _, alphabet, numbers mentioned')


let backslashw2= /\wol/ 
let str2 = 's7%mbols' //true has before ol, contains word characters (% is non word character). Only '%ol' would give false 
console.log(backslashw2.test(str2) + ' as \\w+ means any no. of word characters before \'ol\'')


let backslashw3= /s\Wmbol/ 
let str3 = 'symbol' //false as y is word character
console.log(backslashw3.test(str3) + ' as \\W means non word character, expression will match if string does\'nt contains word character')


let backslashw4= /s\W+mbol/ 
let str4 = '%   mbols' //false as 's' isn't present at start but would have been true as % and space are non word
console.log(backslashw4.test(str4) + ' as \\W+ means more than 1 non word characters before \'mbol\'')


let backslashd1= /s\dmbol/ 
let str5 = 's7mbols'   //true as no. 7 is present
console.log(backslashd1.test(str5) + ' as \\d means digit, expression will match if string contains numbers')


let backslashd2= /s\d+mbol/ 
let str6 = 's779mbols'   //true
console.log(backslashd2.test(str6) + ' as \\d+ means more than 1 digit')


let backslashd3= /s\Dmbol/ 
let str7 = 'symbols'   //true
console.log(backslashd3.test(str7) + ' as \\D means non digit')


let backslashd4= /s\D+mbol/ 
let str8 = 'symmmbols'   //true
console.log(backslashd4.test(str8) + ' as \\D+ means more than 1 non digit')


let backslashs1= /s\smbol/ 
let str9 = 's mbols'   //true. 's\tmbols would alse return true here'
console.log(backslashs1.test(str9) + ' as \\s means space')


let backslashs2= /s\s+mbol/ 
let str10 = 's    mbols'   //true
console.log(backslashs2.test(str10) + ' as \\s+ means more than 1 space')


let backslashs3= /s\S+mbol/ 
let str11 = 's779mbols'   //true
console.log(backslashs3.test(str11) + ' as \\S means non space')


let backslashb1= /symbol\b/ 
let str12 = 'symbol %SYMBOL'   //true as new word starts after symbol
console.log(backslashb1.test(str12) + ' as \\b means word boundary')


//ASSERTIONS
let matchyes = /sym(?=b)/ //match only if b is present after sym otherwise not
let str13 = 'symbols' 
console.log(matchyes.test(str13) + ' as ?= means match only if')


let matchno = /sym(?!b)/ //match only if b is not present after sym otherwise don't
let str14 = 'symbols' 
console.log(matchyes.test(str13) + ' as ?! means match only if character after ?! not present')