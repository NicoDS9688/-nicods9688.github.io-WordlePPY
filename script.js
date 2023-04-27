let attempts= 5;
let word = 'APPLE';
const API = 'https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase';


// FUNCIÓN ASÍNCRONA
fetch(API).then(response => response.json())
.then(response => {
    word = response[0].toUpperCase()
    console.log(word);
})
.catch( err => console.log(['APPLE', 'HURLS', 'WINGS', 'YOUTH', 'ARROW', 'HOUSE', 'FORCE', 'BREAD', 'BREAK', 'AGENT']))


window.addEventListener('load', init);

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}

const BUTTON = document.getElementById("guess-button");
BUTTON.addEventListener("click", CHECK);

const INPUT = document.getElementById("guess-input");
const VALUE = INPUT.value;

function CHECK(){
    const ATTEMPT = checkAttempt();
    if (ATTEMPT === word) {

        const GRID = document.getElementById("grid");
        const ROW = document.createElement('div');
        ROW.className = 'row';
        for (let i in ATTEMPT){
        const SPAN = document.createElement('span');
                SPAN.className = 'letter';
                SPAN.innerHTML = ATTEMPT[i];
                    SPAN.style.backgroundColor = '#79b851';
                    ROW.appendChild(SPAN);
                }
                GRID.appendChild(ROW);
        finish("<h1>YOU WON!🎉</h>");
        return 
    }
    const GRID = document.getElementById("grid");
        const ROW = document.createElement('div');
        ROW.className = 'row';
        for (let i in word){
                const SPAN = document.createElement('span');
                SPAN.className = 'letter';

                if (ATTEMPT[i] === word[i]) {
                    SPAN.innerHTML = ATTEMPT[i];
                    SPAN.style.backgroundColor = '#79b851';

                } else if (word.includes(ATTEMPT[i])){ 
                    SPAN.innerHTML = ATTEMPT[i];
                    SPAN.style.backgroundColor = '#f3c237';

                } else { 
                    SPAN.innerHTML = ATTEMPT[i];
                    SPAN.style.backgroundColor = '#a4aec4';
                }
                ROW.appendChild(SPAN);
        }
        GRID.appendChild(ROW);

            attempts--
    if (attempts==0){
        finish("<h1>YOU LOST!💩</h1>");
    }
}

function checkAttempt(){
    let attempt = document.getElementById("guess-input");
    attempt = attempt.value;
    attempt = attempt.toUpperCase();
    if (attempt === "" || attempt.length < 5) {
        const missingLetters = 5 - attempt.length;
        attempt += "?".repeat(missingLetters);
    }
    return attempt;
}

function finish(message){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let container = document.getElementById("guesses");
    container.innerHTML = message;
}

function resetAttempt() {
    location.reload();
}
