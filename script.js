let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorsButton = document.getElementById("scissorsButton");
let greeting = document.getElementById("greeting")  


let variable = "";
let playerSelection = "";
let computerSelection = "";
let gameResult = "";
let count = "";
userScore = "";
computerScore = "";



function hideGreeting() {
    greeting.style.display = 'none';
}



function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}



function showPopup(message) {
    let popupContainer = document.createElement("div");
    popupContainer.setAttribute("id", "popupContainer");
    document.body.appendChild(popupContainer);
  
    let playAgainButton = document.createElement("button");
    playAgainButton.setAttribute("id", "playAgainButton")
    popupContainer.appendChild(playAgainButton);

    let textButton = document.createElement("p");
    textButton.textContent = `${message}`;
    textButton.setAttribute("id", "textButton");
    playAgainButton.appendChild(textButton);
     
    playAgainButton.addEventListener("click", function() {
      window.location.reload();
    });
}


function play(){

    let gameResult = "";
    let computerSelection = getComputerChoice();
    
    if (playerSelection === 0 && computerSelection === 1) {
        gameResult = "You Lose! Paper beats Rock!";
        computerScore++;

      } else if (playerSelection === 0 && computerSelection === 2) {
        gameResult = "You win! Rock beats Scissors!";
        userScore++;
      } else if (playerSelection === 1 && computerSelection === 0) {
        gameResult = "You win! Paper beats Rock!";
        userScore++;
      } else if (playerSelection === 1 && computerSelection === 2) {
        gameResult = "You Lose! Scissors beat Paper!";
        computerScore++;
      } else if (playerSelection === 2 && computerSelection === 0) {
        gameResult = "You Lose! Rock beats Scissors!";
        computerScore++;
      } else if (playerSelection === 2 && computerSelection === 1) {
        gameResult = "You win! Scissors beat Paper!";
        userScore++;
      } else if (playerSelection === "" && (computerSelection === 0 || 1 || 2)){
        gameResult = "";
      }
      else{
        gameResult = "Tie!";
      }
      
      document.getElementById("result").innerHTML = gameResult;
      document.getElementById("userScore").innerHTML = `Your Score : ${userScore}`;
      document.getElementById("computerScore").innerHTML = `Computer Score : ${computerScore}`;

      if (userScore > computerScore && userScore === 5) {
        showWinner();
      } else if (computerScore > userScore && computerScore === 5) {
        showWinner();
      }
}
    

function showWinner() {
    
    let winner = "";
    if (userScore > computerScore) {
      winner = "You won!";
      setTimeout(function() 
        {
            showPopup("You Won! Play again?");
        }, 500);
    }

    else if (userScore < computerScore) {
      winner = "Computer won!";
      setTimeout(function() 
        {
            showPopup("You Lost! Play again?");
        }, 500);
    }
} 
    

    if (rockButton!== null) {
        rockButton.addEventListener("click", function() {
           playerSelection = 0;         
           play();
           hideGreeting();                    
    }) 
}
   
    if (paperButton!== null) {
       paperButton.addEventListener("click", function() {
          playerSelection = 1;
          play();
          hideGreeting();           
   }) 
}

   if (scissorsButton!== null) {
       scissorsButton.addEventListener("click", function() {
          playerSelection = 2;
          play();
          hideGreeting();              
   }) 
}

   

