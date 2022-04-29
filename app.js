const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 5);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      const winningRules = {
        "rock": ["scissors", "lizard"],
        "scissors": ["paper", "lizard"],
        "paper": ["rock", "spock"],
        "lizard": ["paper", "spock"],
        "spock": ["rock", "scissors"]
      }
    
      function checkResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
          winner.textContent = "It is a tie";
          return;
        }
        const isPlayerWin = winningRules[playerChoice].includes(computerChoice) 
        if(isPlayerWin) {
          pScore++;
          updateScore();
          showThatPlayerWin();
        }
        else {
          cScore++;
          updateScore();
          showThatComputerWin();
        }
      }
     checkResult(playerChoice, computerChoice);
    
      function showThatPlayerWin() {
        winner.textContent = "You Win";
      }
    
      function showThatComputerWin() {
        winner.textContent = "You Lose";
      }
    
    };
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();

