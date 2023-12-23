let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
   const randomIdx = Math.floor(Math.random() * 3);
   return options[randomIdx];
}

const drawGame = () => {
    // console.log("game was draw. ");
    msg.innerText = "Game Was Draw. Play Again";
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compchoice) => {
    if(userWin) {
        // console.log("You Win");
        userscore++
        userScorePara.innerText = userscore
        msg.innerText = "You Win. Your " + userChoice + " beats " + compchoice;
        msg.style.backgroundColor = "green"
    }else{
        // console.log("You Lose");
        compscore++
        compScorePara.innerText = compscore
        msg.innerText = "You Lose. " + compchoice + " beats Your " + userChoice;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice)
    const compchoice = generateCompChoice();
    console.log("computer choice = ", compchoice)

    if(userChoice === compchoice){
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin = compchoice === "papper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compchoice === "scissors" ? false : true;
        }else{
            compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})