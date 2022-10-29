// grab DOM elements for shell functionality

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');
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
        pearl1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        pearl2.classList.add('reveal');
    } else {
        pearl3.classList.add('reveal');
    }
    displayResults();
});

function displayResults() {
    winsEl.textContent = wins;
    totalEl.textContent = total;
    lossesEl.textContent = total - wins;
}

function resetPearls() {
    pearl1.classList.remove('reveal');
    pearl2.classList.remove('reveal');
    pearl3.classList.remove('reveal');
}
