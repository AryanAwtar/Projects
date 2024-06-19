document.querySelector('.refresh').addEventListener("click",function(){{  
    const element = document.getElementById("refresh");  // Get the DIV element
    if (element) {
        element.classList.remove("refresh");
    }
    let randomNumber1=Math.floor(Math.random()*6)+1;
    let randomImageSource1="images/dice"+randomNumber1+".png";
    document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

    let randomNumber2=Math.floor(Math.random()*6)+1;    
    let randomImageSource2="images/dice"+randomNumber2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML='🚩 Player 1 Wins! <br> <span class="refresh" style="font-size:2 rem; color: blanchedalmond;">Play Again</span>';
    }
    else if(randomNumber2>randomNumber1){   
        document.querySelector("h1").innerHTML='Player 2 Wins! 🚩<br> <span class="refresh" style="font-size:2 rem; color: blanchedalmond;">Play Again</span>';
    }
    else{   
        document.querySelector("h1").innerHTML='Draw!<br> <span class="refresh" style="font-size:2 rem; color: blanchedalmond;">Play Again</span>';
    }
}})