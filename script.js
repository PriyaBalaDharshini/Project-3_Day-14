let display = document.querySelector("#display");

let player1Score = document.querySelector("#player1Score");
let player2Score = document.querySelector("#player2Score");

let currentImage = "images/3.jpeg";
let randomImage = document.querySelector("#random-image");

let player1Button = document.querySelector("#player1Button");
let player2Button = document.querySelector("#player2Button");

let reSet = document.querySelector("#reset");

player2Button.disabled = true;
reSet.disabled = true;
player1Button.style.backgroundColor = "rgb(26, 135, 26)";
player2Button.style.backgroundColor = "grey";

function rollnow1() {
    let randomImageNumber = Math.floor(Math.random() * 6) + 1;
    currentImage = `${randomImageNumber}.jpeg`;
    randomImage.src = `images/${currentImage}`;

    let currentScore1 = parseInt(player1Score.innerHTML);
    let newScore1 = currentScore1 + randomImageNumber;
    player1Score.innerHTML = newScore1;

    player1Button.disabled = true;
    player2Button.disabled = false;
    player1Button.style.backgroundColor = "grey";
    player2Button.style.backgroundColor = "rgb(26, 135, 26)";

    display.innerHTML = "Player-2";

    if (newScore1 >= 30) {
        alert("Player 1 is the winner");
        player2Button.disabled = true;
        reSet.disabled = false;
        reSet.style.backgroundColor = "red";
        reSet.style.color = "white";
        reSet.style.fontWeight = "bold";
    }

}

function rollnow2() {
    let randomImageNumber = Math.floor(Math.random() * 6) + 1;
    currentImage = `${randomImageNumber}.jpeg`;
    randomImage.src = `images/${currentImage}`;

    let currentScore2 = parseInt(player2Score.innerHTML);
    let newScore2 = currentScore2 + randomImageNumber;
    player2Score.innerHTML = newScore2;

    player2Button.disabled = true;
    player1Button.disabled = false;

    player1Button.style.backgroundColor = "rgb(26, 135, 26)";
    player2Button.style.backgroundColor = "grey";

    display.innerHTML = "Player-1";

    if (newScore2 >= 30) {
        alert("Player 2 is the winner");
        player1Button.disabled = true;
        reSet.disabled = false;
        reSet.style.backgroundColor = "red";
        reSet.style.color = "white";
        reSet.style.fontWeight = "bold";
    }

}

function reset() {
    player1Score.innerHTML = 0;
    player2Score.innerHTML = 0;

    player1Button.disabled = false;
    player2Button.disabled = true;
    reSet.disabled = true;
    reSet.style.backgroundColor = "rgb(251, 100, 125)";
    reSet.style.color = "black";
    reSet.style.fontWeight = "normal";

    player1Button.style.backgroundColor = "rgb(26, 135, 26)";
    player2Button.style.backgroundColor = "grey";

    display.innerHTML = "Player-1";
}

