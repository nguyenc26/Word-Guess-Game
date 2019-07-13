//Create an array of words
const PokemonNames = ["pikachu", "charmander", "squirtle", "bulbasaur"]
//choose the word 
var randomNumber = Math.floor(Math.random() * PokemonNames.length);
var ChoosenWord = PokemonNames[randomNumber]
console.log(ChoosenWord);

//guesses left 
var guessesLeft = 15;
//guesses that have already made 

//create underscores based on word 
//listen for user guess 
//check if guess is right
//if user is correct we need to show on the under score 
//if user is wrong it needs to show up on the words already guess 
    //also deduct a point of the lives left