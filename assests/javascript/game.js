//Create an array of words
const PokemonNames = ["pikachu", "chimchar", "squirtle", "onix"];
//choose the word and variables 
var randomNumber = Math.floor(Math.random() * PokemonNames.length);
var ChoosenWord = PokemonNames[randomNumber];
console.log(ChoosenWord);
var rightWord = [];
var wrongWord = [];
var underscores = [];
var Pokeballs = 10;

var docUnderscore = document.getElementsByClassName('underscore');
var docWrongLetter = document.getElementsByClassName('wrong');
var docWrongguess = document.getElementsByClassName('Pokeballs');
docWrongguess[0].textContent = Pokeballs;
docWrongLetter[0].textContent = wrongWord;

console.log(docUnderscore);


//Does Not work ===============================
//var Target = document.getElementsByClassName("Pokeballs");
//Target.textContent = "Pokeballs Remaining";
//var newDiv = document.createElement("div");
//newDiv.textContent = Pokeballs;
//docRightguess[0].innerHTML = rightWord;
//=========================================

//create underscores based on word 
var generateUnderscore = () => {
    for (var i = 0; i < ChoosenWord.length; i++) {
        underscores.push("_");
    }
    return underscores;
}
console.log(generateUnderscore());
//displays the comas WTF LOL 
docUnderscore[0].textContent = underscores;

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
         //for loop to search for all the strings 
        //for (var i = 0; i < 
        underscores[ChoosenWord.indexOf(keyword)] = keyword;
       


        docUnderscore[0].innerHTML = underscores.join(' ');
        //check if word is the same
        if (underscores.join('') == ChoosenWord) {
            alert('Congrats you caught a ' + ChoosenWord + "!");
        }
        console.log(rightWord);
        //adding to wrong array 
    } else {
        wrongWord.push(keyword);
        docWrongLetter[0].innerHTML = wrongWord;
        //wrong word is stored
        if (wrongWord) {
            //wrong word subtracts from guesses left
            Pokeballs = Pokeballs - 1;
            docWrongguess[0].innerHTML = Pokeballs;
            console.log(Pokeballs);
            //game over if guesses reaches 0
            if (Pokeballs === 0) {
                alert('Game Over! The ' + ChoosenWord + ' has escaped! Better luck next time.');
                //how do do if a letter is guessed twice it doesnt subtract?
            }
        }

        console.log(wrongWord);

    }

});

//how to get the game to display the _ and scores right away?
//how to get it so repeat mistakes dont subtract from score?
//HOW DO I MOVE THE DIVS?!
//How would I change the game so that if I have repeating characters in the game, it will still register? Explain chimchar example. 
//need to add win counter too 