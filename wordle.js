//maximum number of guesses
var guessCount = 6;

//length of each word
var width = 5;

//current row and column
var row = 0;
var column = 0;

//for gameOver
var gameOver = false;

var worldList = ['apple','train','roast','about','title','hello'];
var guessList = ['apple','grape','combo','style','index','award','basis','beach','eager','about'];

guessList = guessList.concat(worldList);

//generating a random word from the list of words
var word = worldList[Math.floor(Math.random()*worldList.length)].toUpperCase();
console.log(word);