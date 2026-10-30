
const firstnameInput = document.getElementById("firstname");
const lastnameInput = document.getElementById("lastname");
const startButton = document.getElementById("start-btn");


if (startButton) {
    startButton.addEventListener("click", function (event) {
        const firstname = firstnameInput.value.trim();
        const lastname = lastnameInput.value.trim();
        if (firstname === "" || lastname === "") {
            alert("Please enter your first name and last name.");
            event.preventDefault();
            return;
        }
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("attempts", "0");
    });
}
const input = document.getElementById("inputnumb");
const button = document.getElementById("checkbtn");
const output = document.getElementById("result");
const resetbtn = document.getElementById("resetbtn");
const attemptsDisplay = document.getElementById("attempts");
let randomNumber;
let attempts = 0;
function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Secret Number:", randomNumber);
}
if (input && button) {
    generateRandomNumber();
    button.addEventListener("click", function () {
        if (input.value === "") {
            alert("Please enter a number.");
            return;
        }
        const num = Number(input.value);
        if (num < 1 || num > 10) {
            alert("Please enter a number between 1 and 10.");
            return;
        }
        attempts++;
        attemptsDisplay.textContent =
            "Attempts: " + attempts;
        if (num === randomNumber) {
            output.textContent =
                "🎉 Congratulations! You guessed the correct number!";
            localStorage.setItem(
                "attempts",
                attempts
            );
            localStorage.setItem(
                "guessedNumber",
                num
            );
            setTimeout(function () {
                window.location.href = "scoreb.html";}, 1000);
        }
        else if (num > randomNumber) {
            output.textContent =
                "⬆️ Your guess is too high.";

        }
        else {
            output.textContent =
                "⬇️ Your guess is too low.";

        }
        input.value = "";

    });

    resetbtn.addEventListener("click", function () {

        generateRandomNumber();

        attempts = 0;

        attemptsDisplay.textContent =
            "Attempts: 0";

        input.value = "";

        output.textContent = "";

    });

}

const fullname = document.getElementById("fullname");
const guessedNumberDisplay =
    document.getElementById("guessedNumber");

const totalAttempts =
    document.getElementById("totalAttempts");

const rank =
    document.getElementById("rank");

const date =
    document.getElementById("date");

const message =
    document.getElementById("message");


if (fullname) {
    const firstname =
        localStorage.getItem("firstname") || "";

    const lastname =
        localStorage.getItem("lastname") || "";


    fullname.textContent =
        firstname + " " + lastname;

    const guessedNumber =
        localStorage.getItem("guessedNumber") || "-";


    guessedNumberDisplay.textContent =
        guessedNumber;
    const total = localStorage.getItem("attempts") || "0";
    totalAttempts.textContent =total;
    let userRank;
    if (total <= 1) {
       userRank = 1;
    }
    else if (total <= 2) {
        userRank = 2;
    }
    else if (total <= 3) {
        userRank = 3;
    }
    else if (total <= 5) {
        userRank = 5;
    }
    else if (total <= 7) {
        userRank = 7;
    }
    else {
        userRank = 10;
    }


    rank.textContent =
        userRank + " / 10";

    const today = new Date();

    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric"
    };

    date.textContent =
        today.toLocaleDateString(
            "en-GB",
            options
        );

    message.textContent =
        "You guessed the number in " +
        total +
        " attempts.";

}