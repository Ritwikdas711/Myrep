var numofsquares=6;

var colors=generateRandomColors(numofsquares);	
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
	h1.style.backgroundColor="steelblue";
	numofsquares=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	message.textContent="";
	colors=generateRandomColors(numofsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});

hard.addEventListener("click",function(){
	h1.style.backgroundColor="steelblue";
	numofsquares=6;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	message.textContent="";
	colors=generateRandomColors(numofsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}

});


resetButton.addEventListener("click",function(){
	colors=generateRandomColors(numofsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	message.textContent="";
	this.textContent="New Colors"
	for(var i=0;i<squares.length;i++){
	//adding initial color
	squares[i].style.backgroundColor=colors[i];
	}	
	h1.style.backgroundColor="steelblue";
});

colordisplay.textContent=pickedcolor;

for(var i=0;i<squares.length;i++){
	//adding initial color
	squares[i].style.backgroundColor=colors[i];

	//adding click listeners
	squares[i].addEventListener("click",function(){
		

		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedcolor){
			message.textContent="Correct!";
			resetButton.textContent="Play Again?"
			changecolors(pickedcolor);
			h1.style.backgroundColor=clickedColor;
		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="Try again";
		}
	});
}
function changecolors(color){
		for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=color;
		}
}
function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomcolors());
	}
	return arr;
}
function randomcolors(){
	var r=Math.floor(Math.random()*256); //red
	var g=Math.floor(Math.random()*256); //green
	var b=Math.floor(Math.random()*256); //blue

	return "rgb("+ r + ", " + g + ", " + b + ")"
	
}
if(count>3){
	alert("Better luck next time");
}