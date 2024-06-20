let gamePatten=[];
let buttonColors=["red","blue","green","yellow"];
let randomChosenColour=buttonColors[nextSequence()];
gamePatten.push(randomChosenColour);
animateButton(gamePatten);
function soundButton(buttonColor){
    
}
function animateButton(buttonColor) {
    $("#" + buttonColor).fadeIn(100).fadeOut(100).fadeIn(100);
}
function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

console.log(nextSequence());   
console.log(buttonColors[2]);  
console.log(gamePatten);     