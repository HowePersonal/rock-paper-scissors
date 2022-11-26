const body = document.body
const score = document.getElementById('score')
const displayText = document.getElementById('textfield')

const buttonRock = document.getElementById('rock')
const buttonPaper = document.getElementById('paper')
const buttonScissors = document.getElementById('scissors')

var userScore = 0

let getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3)
    
    if (randomNum === 0) {
        return 'Rock'
    } else if (randomNum === 1) {
        return 'Paper'
    } else if (randomNum === 2) {
        return 'Scissors'
    }

}

let updateScore = (result) => {
    if (result == 0 && userScore > 0) {
        userScore += 1
    } 
    else if (result == 1) {
        userScore += 1
    }
    score.innerText = "Score: " + userScore
}

let userChoice = (playerSelection) => {
    let computerSelection = getComputerChoice()
    if (playerSelection === computerSelection) {
        displayText.innerText = `Tied! Both used ${computerSelection}`
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        displayText.innerText = `You lose! Rock is beaten by Paper!` 
        updateScore(0)
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        displayText.innerText = `You win! Rock beats Scissors!`
        updateScore(1)
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        displayText.innerText = `You win! Paper beats Rock!`
        updateScore(1)
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        displayText.innerText = `You lose! Paper is beaten by Scissors!`
        updateScore(0)
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        displayText.innerText = `You lose! Scissor is beaten by Rock!`
        updateScore(0)
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        displayText.innerText = `You win! Scissor beats Paper!`
        updateScore(1)
    } 

    if (userScore >= 5) {
        buttonRock.style.visibility = 'hidden'
        buttonPaper.style.visibility = 'hidden'
        buttonScissors.style.visibility = 'hidden'
    }
}

