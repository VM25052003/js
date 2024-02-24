//We assigned a default value during function declaration, so in case if parameter isn't passed during function call, default value will be assigned
function wishes(name, good_Luck = 'You are Idiot'){
    console.log(`Many many happy returns of the day dear ${name}. ${good_Luck}`)
}
let name1 = 'Swati'
let name2 = 'Smriti'
wishes(name2,'All the best for your future ventures')

const obj = {
    gamer: XYZ,
    game: function(){
        return 'PUBG'
    }
}
console.log(obj.game())