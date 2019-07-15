//Create an array of words
const PokemonNames = ["pikachu", "charmander", "squirtle", "bulbasaur"]
//choose the word and variables 
var randomNumber = Math.floor(Math.random() * PokemonNames.length);
var ChoosenWord = PokemonNames[randomNumber]
var rightWord = [];
var wrongWord = [];
var underscores = [];
console.log(ChoosenWord);

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
    //logs out if the which place the word is in within the array
    console.log(ChoosenWord.indexOf(keyword));
    //if the letter is in the array it is true. if not the result will be -1
    //if user guess is right
    if (ChoosenWord.indexOf(keyword) > -1) {
       //adding to right array
       rightWord.push(keyword);
       //replace underscore with word
       underscores[ChoosenWord.indexOf(keyword)] = keyword;
       //check if word is the same
       //only works for pikachu and squirtle????
       if (underscores.join('') == ChoosenWord) {
           alert('Congrats you caught a ' + ChoosenWord + "!");
       }
       console.log(rightWord);
       //adding to wrong array 
    }else{
       wrongWord.push(keyword);
       console.log(wrongWord);

    }
    
});
