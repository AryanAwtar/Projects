let gamePatten=[];
let buttonColors=["red","blue","green","yellow"];
let randomIndex = nextSequence();
let randomChosenColour = buttonColors[randomIndex];
gamePatten.push(randomChosenColour);


soundButton(randomChosenColour);
animateButton(randomChosenColour);


function soundButton(buttonColor){
    switch(buttonColor){
        case "red":
            let red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case "blue":
            let blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            let green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case "yellow":
            let yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        default:
            console.log(buttonColor);
            let def = new Audio("sounds/wrong.mp3");
            def.play();
    } 
}

function playAudio(audioPath) {
    const audio = new Audio(audioPath);
    audio.play().catch(error => {
        console.log("Failed to play audio:", error);
    });
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
console.log(randomChosenColour);
console.log(randomIndex);
console.log(gamePatten[0]);
console.log(gamePatten.length);
