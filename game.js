let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
     //mode button event listeners
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", modeTypes);
    };
}

function modeTypes() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    modeButtons[2].classList.remove("selected");
        
    this.classList.add("selected");
    //figure out how many squares to show
    if (this.textContent === "Easy") {
        numSquares = 3;
    } 
    else if (this.textContent === "Hard") {
       numSquares = 6;
    } else {
        numSquares = 9;
    }
    
    reset();
}

function setUpSquares() {
    //square event listeners
    for(let i =0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor; 
            if(clickedColor === pickedColor) {
               messageDisplay.textContent = "Correct!";
               resetButton.textContent = "Play Again";
               changeColors(clickedColor);
               h1.style.backgroundColor = clickedColor;
            } else {
               this.style.backgroundColor = "#232323";
               messageDisplay.textContent = "Try Again!";
            }
        });
    };
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(); //pick a new random color from array
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor ="#076860";
}

resetButton.addEventListener("click", function() {
   reset();
})

function changeColors(color) {
    for(var i = 0; i < squares.length; i ++){
        squares[i].style.backgroundColor = color; //change each color to match given color
    }
}

function pickColor() {
  let random =  Math.floor( Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
let arr = [];
for(let i = 0; i < num; i++) {
    arr.push(randomColor()); //get random colors and push into array
}
    return arr; //return that array
}

function randomColor() {
    let r = Math.floor(Math.random() * 256); //pick a "red" from 0 - 255
    let g = Math.floor(Math.random() * 256); //pick a "green" from 0 - 255
    let b = Math.floor(Math.random() * 256); //pick a "blue" from 0 - 255
    return "rgb(" + r + ", " + g + ", " + b + ")";
}