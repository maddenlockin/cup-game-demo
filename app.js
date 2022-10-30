// import functions and grab DOM elements
const img1 = document.getElementById('img-1');
const img2 = document.querySelector('#img-2');
const img3 = document.querySelector('#img-3');

const button1 = document.getElementById('button-1');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

// let state
let wins = 0;
let total = 0;

//button click event listener
button1.addEventListener('click', () => {
    total++;
    resetShells();
    //generate random location (number between 1 and 3)
    const pearlLocation = Math.ceil(Math.random() * 3);
    //take that location and add the reveal class to it (if.. else)
    if (pearlLocation === 1) {
        wins++;
        img1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        img2.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
    displayResults();
});

function displayResults() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}

function resetShells() {
    img1.classList.remove('reveal');
    img2.classList.remove('reveal');
    img3.classList.remove('reveal');
}
