let userScore = 0;
let compScore = 0;
const usSc = document.querySelector("#user-score");
const coSc = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const comChoice = () =>{
    const opt =["rock","paper","scissors"];
    const rendomIdx=Math.floor(Math.random()*3);
    return opt[rendomIdx];
}
const drawGame = () =>{
     msg.innerText = "Draw. Play again"
}
const playGame = (userChoice) => {
    const compChoice = comChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        } else if(userChoice == "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
         playGame(userChoice);
    })
})

const showWinner =(userWin)=>{
    if(userWin){
        msg.innerText = "You win"
        userScore++;
        usSc.innerHTML=`${userScore}`
    }else{
         msg.innerText = "You Lose"
         compScore++;
         coSc.innerHTML=`${compScore}`
    }
}