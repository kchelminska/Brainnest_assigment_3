const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerChoice: "",
    aiChoice: "",
}
const choices = [...document.querySelectorAll(".choices .choice")];

//               Select choice function                 //
function choiceSelection (){
    game.playerChoice = this.dataset.option
    console.log(this.dataset.option);
    choices.forEach(choice => choice.style.borderColor = "black")
    this.style.borderColor = "white";
}

//               Computer choice function                 //
function aiChoice(){
    let random = ["rock", "paper", "scissors"];
    const aiChoice = random[Math.floor(Math.random() * 3)];
    console.log(aiChoice);
    return aiChoice;
}

function checkResult(player, ai){
    console.log(player, ai)
    if (player === "rock") {
        if (ai === "rock") {
            return "Draw!";
        } else if (ai === "paper") {
            return "Computer wins!";
        } else {
            return "User wins!";
        }
    } else if (player === "paper") {
        if (ai === "rock") {
            return "User wins!";
        } else if (ai === "paper") {
            return "Draw!";
        } else {
            return "Computer wins!";
        }
    }  else if (ai === "rock") {
            return "Computer wins!";
        } else if (ai === "paper") {
            return "User wins!";
        } else {
            return "Draw!";
        }
}

//              Publish result function                   //
function publishResult(player, ai, result){
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="computer-choice"]').textContent = ai;
    document.querySelector('[data-summary="who-win"]').textContent = result;
}

//                  End function                         //
function endGame(){
    document.querySelector(`[data-option="${game.playerChoice}"]`).style.borderColor = "";
    game.playerChoice = "";
}

//                   Start function                      //
function startGame(){
    if (!game.playerChoice) {return alert("You have to choose: Paper, Rock or Scissors!")
    }
    game.aiChoice = aiChoice();
    const gameResult = checkResult(game.playerChoice, game.aiChoice)
    // console.log(gameResult)
    publishResult(game.playerChoice, game.aiChoice, gameResult)
    endGame()
}

choices.forEach(choice => choice.addEventListener('click', choiceSelection))
document.querySelector('.start').addEventListener('click', startGame);