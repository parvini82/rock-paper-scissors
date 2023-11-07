function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function playGame(input) {
    let states = {
        rock: 1,
        paper: 2,
        scissors: 3,
    };
    let statesById = {
        [states.rock]: "rock",
        [states.paper]: "paper",
        [states.scissors]: "scissors",
    };
    let dominantStates = {
        [states.rock]: states.scissors,
        [states.paper]: states.rock,
        [states.scissors]: states.paper,
    };
    let statusTexts = {
        tie: "TIE!",
        win: "WON!",
        lose: "LOST!",
    };

    let rand = getRandomInteger(1, 3);

    let resultElement = document.getElementById("result");

    if (input == rand) {
        resultElement.innerHTML = statusTexts.tie;
    } else if (dominantStates[input] == statesById[rand]) {
        resultElement.innerHTML = statusTexts.win;
    } else {
        resultElement.innerHTML = statusTexts.win;
    }

    console.log(input + "  " + rand);
    console.log(result);
}
