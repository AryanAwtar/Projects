let gamePatten=[];
let userClickedPattern=[];
let buttonColors=["red","blue","green","yellow"];
let randomIndex = nextSequence();
let randomChosenColour = buttonColors[randomIndex];
gamePatten.push(randomChosenColour);


for(let i=0;i<document.querySelectorAll(".btn").length;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        let userChosenColour = this.id;
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
        soundButton(userChosenColour);
        animateButton(userChosenColour);
        
    })  
}

document.addEventListener("click",function(){{  
soundButton(randomChosenColour);
animateButton(randomChosenColour);
}})
document.addEventListener("keypress",function(event){
    soundButton(randomChosenColour);
    animateButton(randomChosenColour);
})
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
            break;
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
