const check1 = document.getElementById("cheack1");
const check2 = document.getElementById("cheack2");

let rounds = 0;
let player1Score = 0;
let player2Score = 0;

function ludogame() {

    if (rounds >= 10) {
        return;
    }

    rounds++;

    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    check1.style.transform = "rotate(360deg)";
    check2.style.transform = "rotate(360deg)";

    check1.src = `images/dice${dice1}.png`;
    check2.src = `images/dice${dice2}.png`;

    let total = dice1 + dice2;

    document.getElementById("score").textContent =
        `Round ${rounds} / 10`;

    if (total === 2 || total === 4 || total === 6) {

        player1Score++;

        document.querySelector("h1").textContent =
            "Player 1 Won This Round!";

        document.getElementById("playerOneResult").innerHTML +=
            `<p>Round ${rounds}: Win ✅</p>`;

        document.getElementById("playerTwoResult").innerHTML +=
            `<p>Round ${rounds}: Lose ❌</p>`;

    } else if (total === 3 || total === 5 || total === 7) {

        player2Score++;

        document.querySelector("h1").textContent =
            "Player 2 Won This Round!";

        document.getElementById("playerOneResult").innerHTML +=
            `<p>Round ${rounds}: Lose ❌</p>`;

        document.getElementById("playerTwoResult").innerHTML +=
            `<p>Round ${rounds}: Win ✅</p>`;

    } else {

        document.querySelector("h1").textContent = "Draw!";

        document.getElementById("playerOneResult").innerHTML +=
            `<p>Round ${rounds}: Draw 🤝</p>`;

        document.getElementById("playerTwoResult").innerHTML +=
            `<p>Round ${rounds}: Draw 🤝</p>`;
    }

    if (rounds === 10) {

        document.getElementById("playerOneResult").innerHTML +=
            `<h2>Total Score: ${player1Score}</h2>`;

        document.getElementById("playerTwoResult").innerHTML +=
            `<h2>Total Score: ${player2Score}</h2>`;

        if (player1Score > player2Score) {

            document.getElementById("playerOneResult").innerHTML +=
                `<h2>🏆 WINNER</h2>`;

            document.getElementById("playerTwoResult").innerHTML +=
                `<h2>❌ LOSER</h2>`;

        } else if (player2Score > player1Score) {

            document.getElementById("playerTwoResult").innerHTML +=
                `<h2>🏆 WINNER</h2>`;

            document.getElementById("playerOneResult").innerHTML +=
                `<h2>❌ LOSER</h2>`;

        } else {

            document.querySelector("h1").textContent = "Match Draw!";
        }
    }
}