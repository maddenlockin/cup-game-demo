// import functions and grab DOM elements
const img1 = document.getElementById('img-1');
const img2 = document.querySelector('#img-2');
const img3 = document.querySelector('#img-3');

const button1 = document.getElementById('button-1');
// let state

//button click event listener
button1.addEventListener('click', () => {
    //generate random location (number between 1 and 3)
    const pearlLocation = Math.ceil(Math.random() * 3);
    //take that location and add the reveal class to it (if.. else)
    if (pearlLocation === 1) {
        img1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        img2.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
});
