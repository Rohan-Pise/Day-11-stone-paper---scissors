let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg =document.querySelector("#msg");

const reset= document.querySelector(".reset");



let youscore = document.querySelector("#you");
let cscore = document.querySelector("#comp");


reset.addEventListener("click", ()=>{
  userScore=0;
  compScore=0;
  youscore.innerText = "0";
  cscore.innerText = "0";
  msg.innerText= "Play Your Move";
  msg.style.backgroundColor = "#2E282A";
 });


let getCompChoice = ()=>{
  const options = ["stone", "paper", "scissors"];
  const randomidx = Math.floor(Math.random()*3);
  return options[randomidx];
};


let drawGame = ()=>{
  console.log("Draw");
  msg.innerText = "Game Was Draw , Play Again.";
  msg.style.backgroundColor = "grey";
}


let showWinner =(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    youscore.innerText = userScore;

    console.log("You Won");
    msg.innerText = `You Won ! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

  }else{
    compScore++;
    cscore.innerText = compScore;
    console.log(`You loose`);
    msg.innerText = `You loose ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

let playgame = (userChoice)=>{
  console.log("userchoice is =" , userChoice);
  const compChoice = getCompChoice();
  console.log("Computer's choice is",compChoice);
  if(userChoice === compChoice){
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "stone"){
      userWin = compChoice ==="paper"? false : true;
    }
    else if(userChoice == "paper"){
      userWin = compChoice === "stone"? true : false;
    }
    else{
      userWin = compChoice === "stone"? false: true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) =>{
  choice.addEventListener("click" , () =>{
    const userChoice= choice.getAttribute("id");
    playgame(userChoice);
  });
});