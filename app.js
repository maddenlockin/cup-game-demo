// import functions and grab DOM elements
const disImage0 = document.getElementById('cup-0');
const disImage1 = document.getElementById('cup-1');
const disImage2 = document.getElementById('cup-2');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');
const button0 = document.getElementById('button-0');
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
// let state
let wins = 0;
let total = 0;

// create handler function for user guess
function handleGuess(id) {
    // set display image src
    disImage0.src = 'assets/cup.png';
    disImage1.src = 'assets/cup.png';
    disImage2.src = 'assets/cup.png';
    // increment total
    total++;
    // randomize app cup choice & compare
    const randomizeBall = Math.floor(Math.random() * 3);

    if (randomizeBall === id) {
        wins++;
    }
    // update display image
    const displayBall = document.getElementById(`cup-${randomizeBall}`);

    displayBall.src = 'assets/ball-cup.png';
    // update win/loss/total

}
// set event listeners 
  // event for each button, call handler function 

