var timer=60;
var score=0;
var hitrn=0;

function makeBubble(){
    var cluttre="";
for(var i=1; i<=114; i++){
    var rn=Math.floor(Math.random()*10)
    cluttre += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=cluttre;
}


function runtimer(){
    var timerClr= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent=timer;
        }
        else{
            clearInterval(timerClr);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
                }
    },1000)
}


function getNewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitrn;
}

function increaseScore(){
    score +=10;
    document.querySelector("#scorevalue").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum=Number(dets.target.textContent);
    if(clickedNum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
getNewHit();
runtimer();
makeBubble()