
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var square = document.querySelector(".square");
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector("h1");
var resetButton = document.getElementById('reset');
var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
};

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  };
};

function setupSquares(){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        message.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
      };
    });
    reset();
 };
};



//Reset Game
function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colours";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
        squares[i].style.display ="block";
        squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
};

//Reset Button
resetButton.addEventListener("click", function(){
   reset();
});

//Change colors to all display picked color
function changeColors(clickedColor){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = pickedColor;
  };
};

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);//Math.random is between 0 & 1 but does not include 1; multiplying by colors length is 6 but as multiplying up to but not including 1 we won't go above 5.999999. The floor reduces it to 5 which gives us a number between 0 and 5 which is what we need to select a color in the array.
  return colors[random];
};


//Generate Random Colors using randomColor function

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    //get random color & push into array "num" times;
    arr.push(randomColor());
  };
  return arr;
};

function randomColor(){
  //pick a red from 0-255; green; blue
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};
