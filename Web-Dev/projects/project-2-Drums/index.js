let event1 = document.querySelectorAll("button").length
for(let i=0;i<event1;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        alert("I got clicked")
    })
}