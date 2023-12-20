let count=60;  
var score = 0;
var hitrn;



let time = document.querySelector(".time");
let Timer = document.querySelector(".Timer");
let start = document.querySelector(".start");
var foot = document.querySelector(".pfoot")



function bubblerMaker(){
    var clutter = "";
    for(i = 0 ; i<=219; i++){
        var random = Math.floor(Math.random()*10+1);
        clutter += `<div class="bubble">${random}</div>`;
    }
    document.querySelector(".pfoot").innerHTML = clutter;
}
bubblerMaker();


function timer() {
   var Interval = setInterval(function(){
        if(count>0){
            count--;
            time.textContent = count;
        }
        else{
            clearInterval(Interval);
            foot.innerHTML = `<h1>Game Over</h1>
            <h1>Your score : ${score}`
        }
    },1000)
}


function hit(){
    hitrn = Math.floor(Math.random()*10+1)
    document.querySelector("#hitter").innerHTML = hitrn;
}


function scoreInv(){
    score += 10;
    document.querySelector(".Score").textContent = score;
}


foot.addEventListener("click",function(dets){
    var match = Number(dets.target.innerHTML);
    if(match === hitrn){
        scoreInv();
        hit();
        bubblerMaker();
    }
})

Timer.addEventListener("click",function(){
    timer();
    hit();
})

start.addEventListener("click",function(){
  bubblerMaker();
  count = 60;
  timer();
})