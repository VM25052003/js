// Three types of variables in js are - var, val and let
var Name = "Vidhi";
console.log(Name);
var channel;
channel = "AC";
var marks = 35;
marks = 53;
console.log(channel);
console.log(Name, channel, marks) 
/*If comment out channel = "AC";, it wil show as Vidhi undefined
  Marks changed to 53 */
const owner = "Hari";
// owner = "Ram"
console.log(owner) //It will giver error, so can't change owner 
const fruit = "Apple" //We must initialize const, else will give error 
const arr = [1, 2, 4, 8];
arr.push(16)  //We can add elements to set, even if it is const
console.log(arr)
{let Name = "VM"
Name = "VidhiM"
console.log(Name)
}
console.log(Name)
// Let creates a local variable, which also allows changes; outside this block, it takes in global variable
