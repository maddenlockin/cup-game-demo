// import functions and grab DOM element
const button1 = document.getElementById('button-1');
const shell1 = document.querySelector('#img-1');
const shell2 = document.querySelector('#img-2');
const shell3 = document.querySelector('#img-3');

// let state

button1.addEventListener('click', () => {
    resetShells();
    //generate a random number between 1 and 3
    const pearlLocation = Math.ceil(Math.random() * 3);
    // compare number and shell (if...else)
    //add class of reveal to matching shell
    if (pearlLocation === 1) {
        shell1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        shell2.classList.add('reveal');
    } else {
        shell3.classList.add('reveal');
    }
});

function resetShells() {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
}
