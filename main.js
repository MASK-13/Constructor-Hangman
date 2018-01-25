//FILES ./.js  VARIABLES and  modularization.

var gameFile = require("./game.js");

var wordConstructor = require("./word.js");

var letterConstructor = require("./letter.js");

var randomWord = gameFile.randomWord;

var myWord = new wordConstructor.wordConstructor(gameFile.randomWord);

var letterGuessed;

var maxGuess = 15;

exports.letter;



//NPM inquired installed  GET "inquirer"

var inquirer = require("inquirer");



function makeGuess(){ 

    console.log(myWord.toString());



    if(myWord.userGuesses.length >= maxGuess){

        console.log("You have NO more guesses");



        return;

    }



    inquirer.prompt([{

        name: "letter",

        type: "text",

        message: "Please enter a letter",


    }]).then(function(letterInput){

        var letter = letterInput.letter;

        myWord.findLetter(letter);



        if (myWord.isComplete()){

            console.log("Correct! The word was " + myWord.toString() + "!");

            return;

        }



        console.log("------Next guess------");

        console.log("You have " + (maxGuess - myWord.userGuesses.length) + " guesses left");

        makeGuess();

        });

}



//Starts the game:

makeGuess();

