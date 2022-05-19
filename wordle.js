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

window.onload = function(){
    initialize();
}
function initialize(){
    //creating the board
    for(let r = 0;r < guessCount;r++){//rows
        for(let c = 0;c < width;c++){//columns

            //creating a span element
            let tile = document.createElement("span");

            tile.id = r.toString()+"-"+c.toString();
            tile.classList.add("tile");
            tile.innerText - " ";
            document.getElementById("board").appendChild(tile);

        }
    }
    //creating the keyboard
    let keyboard = [['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Enter','Z','X','C','V','B','N','M','⌫']];

    for(let i = 0; i<keyboard.length; i++){
        let  currentRow = keyboard[i];
        let keyboardRow = document.createElement("div");

        //keyboard-row class will be created later
        keyboardRow.classList.add("keyboard-row");

        for(let j = 0;j<currentRow.length;j++){

            //creates a div for every character
            let keyTile = document.createElement("div");

            //holds jth character of the current row 
            let key = currentRow[j];

            //entering the current character as a text in the above created div
            keyTile.innerText = key;

            //adding IDs to every div
            if(key == "Enter"){
                keyTile.id = "Enter";
            }
            else if(key == "⌫"){
                keyTile.id = "Backspace";
            }
            else if("A"<=key && key <="Z"){
                keyTile.id = "key"+key;
            }
            //create an event listener
            //processKey will be created later
           // keyTile.addEventListener("click",processKey);

            if(key == "Enter"){
                //will create enter-key-tile claas later
                keyTile.classList.add("enter-key-tile")
            }
            else{
                keyTile.classList.add("key-tile")
            }
            keyboardRow.appendChild(keyTile);   
        }
        document.body.appendChild(keyboardRow);
    }
    // document.addEventListener("keyup",(e) => {
    //     //processInput will be created later
    //     processInput(e);
    // })
}

