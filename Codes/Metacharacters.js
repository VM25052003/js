/* If we want to match any symbol not as a metacharacter but as a simple character only, then use \ as escape sequence. For eg - /\^sym/

SPECIAL METACHARACTER SYMBOLS*/
let caret = /^sym/
let str1 = 'symbbol' //true
console.log(caret.test(str1) + ' as \'^\' at beginning of string means expression will match if string starts with')



let dollar = /ith$/
let str2 = 'ends wiith'  //true
console.log(dollar.test(str2) + ' as \'$\' at end of string means expression will match if string ends with')



let dot = /ex.res/
let str3 = 'exaresx' //true as character 'a' is present between 'x' & 'r'
console.log(dot.test(str3) + ' as symbol \'.\' means expression will match any one character')



let star = /ex*/
let str4 = 'presxon'  //true as both e and x are present. If one is missing, will return false
console.log(star.test(str4) + ' as symbol \'*\' means expression will match 0/more characters')



let qmark = /e?press?ionz?/
let str5 = 'xpresions' //true even after e, s and z are absent
console.log(qmark.test(str5) + ' as symbol \'?\' means expression after with ? exist in qmark are optional characters in str5')