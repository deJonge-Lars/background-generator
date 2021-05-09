var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".randomize");

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomGradients() {
    color1.value = getRandomGradients();
	color2.value = getRandomGradients();
	setGradient();   
}

function getRandomGradients() {
    for(let i = 0; i < 6; i++) {
         var getRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    return getRandomColor;
}

btn.addEventListener("click", randomGradients);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

