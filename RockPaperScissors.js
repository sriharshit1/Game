let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");


const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3)
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText = "Game was draw,play again";
    msg.style.backgroundColor = "#381D2A";
}

const showWinner = (userWin,Userchoice,comp) =>{
    if(userWin){
       userScore++;
       userScorepara.innerText = userScore;
        msg.innerText = "You won";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = "You loose";
        msg.style.backgroundColor = "pink";
        msg.style.color = "white";
    }
}

const playGame = (Userchoice ) =>{
    console.log("user choice  " ,Userchoice );
    const compChoice = genCompChoice();
    console.log("comp choice  " ,compChoice );

    if(Userchoice === compChoice) {
            drawGame();
    }
    else{
        let userWin = true;
        if(Userchoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }
        else if(Userchoice === "paper"){
            userWin = compChoice === "scissors"?false:true;
        }
        else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice) => {

    choice.addEventListener("click",() =>{
        const Userchoice = choice.getAttribute("id")
       playGame(Userchoice)
    });
});