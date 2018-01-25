
// ARRAY of word. 

var wordsGuess = ["underground","blockchain","encapsulation", "dependencies","free","MB USA"];



var randomIndex = Math.floor(Math.random() * wordsGuess.length);



var randomWord = wordsGuess[randomIndex];



exports.randomWord = randomWord;