const generateBtn = document.querySelector('.generate');
const count = document.querySelector('.count');

// function GenerateRandom in this we use the logic to generate random number

function GenerateRandom() {
    const randomNumber = Math.floor(Math.random()*10) + 1; // this const stores number between 1 and 10 both including
    count.innerText = randomNumber;
}

generateBtn.addEventListener('click', GenerateRandom);