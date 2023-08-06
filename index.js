var randomNumber1 = Math.random();
randomNumber1= randomNumber1*6;
randomNumber1= Math.floor(randomNumber1)+1;

var randomNumber2 = Math.random();
randomNumber2= randomNumber2*6;
randomNumber2= Math.floor(randomNumber2)+1;

// var player1 = prompt("Enter the name of First Player");
// var player2 = prompt("Enter the name of Second Player");


//var source1 = "./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png");

//var source2 = "./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png");

if(randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if ( randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else document.querySelector("h1").innerHTML = "Draw!";


