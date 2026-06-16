let boxs=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let mgs=document.querySelector("#mgs");
let newGame=document.querySelector("#new-game-btn");
let msgContainer=document.querySelector(".msg-container");

let turn0=true; //playerX, playerY
const winpatter=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
let resetGame=()=>{
  turn0=true;
  enableBoxs();
  msgContainer.classList.add("hide")
}
boxs.forEach( (box)=> {
  box.addEventListener("click",()=>{
    if(turn0){
        box.innerText="0";
        turn0=false;
    }else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;
    checkWinner();
  });
});
const disabledBoxs= ()=>{
for(let box of boxs){
  box.disabled=true;
};
};

const enableBoxs= ()=>{
for(let box of boxs){
  box.disabled=false;
  box.innerText=""
};
}

let winner=(win)=>{
  mgs.innerText=`Congratulation winner Is ${win}`;
  msgContainer.classList.remove("hide")
  disabledBoxs()
};
let checkWinner=()=>{
    for(let patter of winpatter ){
      let pos1Val=boxs[patter[0]].innerText;
      let pos2Val=boxs[patter[1]].innerText;
      let pos3Val=boxs[patter[2]].innerText;
   
    if(pos1Val !="" && pos2Val !="" && pos3Val !="" )
        if(pos1Val===pos2Val && pos2Val===pos3Val){
          // console.log("winner");
          winner(pos1Val);
        };
      };
        
};
newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);