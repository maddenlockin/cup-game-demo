// grab DOM elements for shell functionality

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');
const button1 = document.getElementById('button-1');
const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');

//state
let wins = 0;
let total = 0;

// add an eventListener to our button
button1.addEventListener('click', () => {
    // increment total every time
    total++;
    //reset
    resetPearls();
    // on click, randomize pearl location
    const pearlLocation = Math.ceil(Math.random() * 3);
    // check pearl location
    if (pearlLocation === 1) {
        wins++;
        // if its the location add classList of 'reveal' to pearl div
        shell1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        shell2.classList.add('reveal');
    } else {
        shell3.classList.add('reveal');
    }
    displayResults();
});

function displayResults() {
    winsEl.textContent = wins;
    totalEl.textContent = total;
    lossesEl.textContent = total - wins;
}

function resetPearls() {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
}
