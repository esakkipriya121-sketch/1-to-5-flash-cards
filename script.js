// Flash card data
let cards = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },

    {
        question: "What is CSS?",
        answer: "CSS is used to design web pages."
    },

    {
        question: "What is JavaScript?",
        answer: "JavaScript is used to make web pages interactive."
    },

    {
        question: "What is a variable?",
        answer: "A variable is used to store data."
    },

    {
        question: "What is a function?",
        answer: "A function is a block of code used to perform a task."
    }
];

let currentCard = 0;


// View Answer
function viewAnswer() {

    document.getElementById("answer").style.display = "block";

}


// Next Card
function nextCard() {

    currentCard++;

    // Go back to first card
    if (currentCard >= cards.length) {
        currentCard = 0;
    }

    // Change question
    document.getElementById("question").innerHTML =
        cards[currentCard].question;

    // Change answer
    document.getElementById("answer").innerHTML =
        cards[currentCard].answer;

    // Hide answer again
    document.getElementById("answer").style.display = "none";

    // Change card number
    document.getElementById("count").innerHTML =
        "Card " + (currentCard + 1) + " of " + cards.length;
}


// Progress Bar
function startProgress() {

    let progress = 0;

    let bar = setInterval(function () {

        progress++;

        document.getElementById("progressBar").style.width =
            progress + "%";

        if (progress >= 100) {
            clearInterval(bar);
        }

    }, 50);
}


// Digital Clock
function digitalClock() {

    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours == 0) {
        hours = 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds + " " + ampm;
}


// Run clock every second
setInterval(digitalClock, 1000);

digitalClock();
