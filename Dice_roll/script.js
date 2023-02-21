var button = document.getElementById("shuffle");
button.addEventListener("click", function(){


// for player 1
var randomNumber1 = Math.floor(Math.random()*6) + 1; 

randomImage1 = "dice" + randomNumber1 + ".png";

randomImageSource1 = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1)



// for player 2
var randomNumber2 =Math.floor(Math.random()*6)+ 1;

randomImage2 = "dice" + randomNumber2 +".png";

randomImageSource2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);



// winner declaration

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}

else{
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩" ;
}


});