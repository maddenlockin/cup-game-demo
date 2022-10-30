// import functions and grab DOM element
const button1 = document.getElementById('button-1');
const shell1 = document.querySelector('#img-1');
const shell2 = document.querySelector('#img-2');
const shell3 = document.querySelector('#img-3');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

// let state
let wins = 0;
let total = 0;

button1.addEventListener('click', () => {
    total++;
    resetShells();
    //generate a random number between 1 and 3
    const pearlLocation = Math.ceil(Math.random() * 3);
    // compare number and shell (if...else)
    //add class of reveal to matching shell
    if (pearlLocation === 1) {
        wins++;
        shell1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        shell2.classList.add('reveal');
    } else {
        shell3.classList.add('reveal');
    }
    // display function
    displayResults();
});

function resetShells() {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
}

function displayResults() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}
