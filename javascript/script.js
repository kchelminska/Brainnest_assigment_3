// Get User Input
for (let i = 0; i <5; i++){
    const userChoiceDisplay = prompt("Let's play! Do you choose paper, rock or scissors?").toLowerCase(); 
        if(userChoiceDisplay ==="paper" || userChoiceDisplay ==="rock" || userChoiceDisplay ==="scissors"){
            console.log("Your choice: " + `${userChoiceDisplay}`);

// Computer Choice If Correct User Input
            function computerChoice() {
                let random = ["rock", "paper", "scissors"];
                return random[Math.floor(Math.random() * 3)];
            }
            var computerChoiceDisplay = computerChoice();
            console.log("Computer's choice: ", computerChoiceDisplay);
            var gameResult = gameRound(userChoiceDisplay, computerChoiceDisplay)  
            console.log("Result: ", gameResult);

// Warrning If Incorrect User Input 
        } else {
            console.log("You must input paper, rock or scissors!");   
        }     
}

// Round Of The Game
function gameRound(userChoiceDisplay, computerChoiceDisplay) {
    if (userChoiceDisplay === "rock") {
        if (computerChoiceDisplay === "rock") {
            return "Draw!";
        } else if (computerChoiceDisplay === "paper") {
            return "Computer wins!";
        } else {
            return "User wins!";
        }
    } else if (userChoiceDisplay === "paper") {
        if (computerChoiceDisplay === "rock") {
            return "User wins!";
        } else if (computerChoiceDisplay === "paper") {
            return "Draw!";
        } else {
            return "Computer wins!";
        }
    }  else if (computerChoiceDisplay === "rock") {
            return "Computer wins!";
        } else if (computerChoiceDisplay === "paper") {
            return "User wins!";
        } else {
            return "Draw!";
        } 
}