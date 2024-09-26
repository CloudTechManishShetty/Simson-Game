let gameSeq=[];
let userSeq=[];
let btns=["yellow","green","red","purple"];

let started=false;
let level=0;

let reset=document.createElement("button");
reset.innerText="Restart the Game";
reset.classList.add("bttn");
reset.style.display = "none"; 
let end=document.querySelector(".btn-container");
end.insertAdjacentElement("afterend",reset);
reset.addEventListener("click",resetfun);

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started ==  false){
        console.log("Game is Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn) {
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
}

function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function btnPress(){
    console.log("btn was pressed");
    let btn=this;
    console.log(btn);
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkLevel(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function checkLevel(idx){
    console.log(`Current Level: ${level}`);

    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        console.log("Same Value");
    }
    else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b>.`;
        reset.style.display = "inline-block";
    }
}

function resetfun() {
    console.log("Reset");
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
    h2.innerText = "Press Any Key to Start"; // Reset text
    reset.style.display = "none"; // Hide the reset button again
}

