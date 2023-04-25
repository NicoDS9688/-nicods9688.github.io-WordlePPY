let dictionary = ['APPLE', 'HURLS', 'WINGS', 'YOUTH', 'ARROW', 'HOUSE', 'FORCE', 'BREAD', 'BREAK', 'AGENT'];
let attempts= 5;
const word = dictionary[Math.floor(Math.random() * dictionary.length)];


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
    return attempt;
}

function finish(message){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let container = document.getElementById("guesses");
    container.innerHTML = message;
}


