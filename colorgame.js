var numsq = 6;
var colors = generateRandomColors(numsq);
var pickedColor = pickColor();
var messageDisplay = document.querySelector('#message')
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var h1 = document.querySelector("h1");
var resetButton = document.getElementById('reset');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');


easy.addEventListener('click', function(){
	easy.classList.add('selected');
	hard.classList.remove('selected');
	numsq = 3;
	colors = generateRandomColors(numsq);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i <= squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = 'none';
		}
	}
})
hard.addEventListener('click', function(){
	easy.classList.remove('selected');
	hard.classList.add('selected');
	numsq = 6
	colors = generateRandomColors(numsq);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i <= squares.length; i++){
	
			squares[i].style.backgroundColor = colors[i];
		
			squares[i].style.display = 'block';
	}
})

resetButton.addEventListener('click',function(){
	colors = generateRandomColors(numsq);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent ='';
	this.textContent = 'New Colors';
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor =colors[i]
	}
	h1.style.backgroundColor = 'steelblue';
})
colorDisplay.textContent = pickedColor;

for(var i =0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];


	//eventListeners for the squares
	squares[i].addEventListener('click', function(){
		//now we need to get the color they clicked on
		var clickedColor = this.style.backgroundColor;
		//and compare it to pickedColor
		if (clickedColor === pickedColor){
			messageDisplay.textContent = 'Correct!';
			resetButton.textContent = 'Play Again?';
			h1.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
		}
		else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	});
}

function changeColors(color){
	//loop thru all squares
	//change each color to match given color
	for(var i = 0; i< colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
	 var random = Math.floor(Math.random() * colors.length);
	 return colors[random];
}

function generateRandomColors(num){
	//array for random colors
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}