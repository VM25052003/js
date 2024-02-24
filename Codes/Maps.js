/*We can use any type of key/ value in map
.set = to set values in map
.get = to get values in map
.size = get size of map
.keys = for keys only
Can also use 'for-of' loop to get keys and values & 'for-each' to loop through each map
We can convert a map/ map key/ map value to an array using Arrays.From()*/
const myMap = new Map()
const key1 = "String", key2 = {}, key3 = function(){} //Name of keys
myMap.set(key1, 'This is a string')
myMap.set(key2, 'This is a blank object')
myMap.set(key3, 'This is an empty function')
console.log(myMap)

console.log(myMap.get(key1))
console.log(myMap.size)

for (const [key, value] of myMap) {             //Getting both keys and values
    console.log(key, value)
}
for (const key of myMap.keys()) {               //Getting keys only
    console.log('key is', key)
}
for (const value of myMap.values()) {           //Getting values only
    console.log('value is', value)
}
myMap.forEach((value, key) => {
    console.log('Value of key ' + key + ' is ' + value)
});
//Here key and value are written oppositely in () and while printing

console.log(Array.from(myMap))            //Converting map to an array
console.log(Array.from(myMap.keys()))     //Converting map keys to an array
console.log(Array.from(myMap.values()))   //Converting map values to an array