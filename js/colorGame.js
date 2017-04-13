var numOfSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector(".colorDisplay");
var messageDisplay = document.querySelector(".message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector(".reset-btn");
var modeButtons = document.querySelectorAll(".mode-btn");

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		// if(this.textContent === "Easy"){
		// 	numOfSquares = 3;
		// } else {
		// 	numOfSquares = 6;
		// }
		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
		reset();
	});
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numOfSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		console.log("clicked a square");
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background =clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < colors.length; i++){
		squares[i].style.background = color;
	}
	//change each color to match given color
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
} 

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	} 
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}