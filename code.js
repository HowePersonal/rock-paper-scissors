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

let start = (playerSelection, computerSelection) => {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()

    if (playerSelection === computerSelection) {
        return `Tied! Both used ${computerSelection}`
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return `You lose! Rock is beaten by Paper!`
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return `You win! Rock beats Scissors!`
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `You win! Paper beats Rock!`
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return `You lose! Paper is beaten by Scissors!`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return `You lose! Scissor is beaten by Rock!`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You win! Scissor beats Paper!`
    } 

    return `${playerSelection} is not a valid input`
}