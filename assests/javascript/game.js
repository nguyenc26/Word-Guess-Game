//Create an array of words
const PokemonNames = ["pikachu", "charmander", "squirtle", "bulbasaur"]
//choose the word 
var randomNumber = Math.floor(Math.random() * PokemonNames.length);
var ChoosenWord = PokemonNames[randomNumber]
console.log(ChoosenWord);
var underscores = [];

//guesses left 
var guessesLeft = 15;
//guesses that have already made 

//create underscores based on word 
var generateUnderscore = () => {
    for (var i = 0; i < ChoosenWord.length; i++) {
        underscores.push("_");
    }
    return underscores;
    //ask what the return part does again.
}
console.log(generateUnderscore());

//listen for user guess 
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);
});
//check if guess is right
if (keyword) {

} else {
    
}

//if user is correct we need to show on the under score 
//if user is wrong it needs to show up on the words already guess 
    //also deduct a point of the lives left