const objetos = ["🚗", "🎈", "🐐", "🍌", "⚽", "🎃"]
const prompt = require('prompt-sync')();
const timeInterval = 1500;

const randomChoice = function (array) {
    randomIndex = Math.floor(Math.random() * array.length);
    randomItem = array[randomIndex];
    return randomItem;
}
function sleep(time){
    return new Promise((resolve, reject) => {setTimeout(() => resolve(), time)})
}

// sleep(3000);


function chooseNonRepet(arr, amount){
    ret = [];
    for (let i = 0; i < amount; i++){
        rand = randomChoice(arr);
        while (ret.includes(rand)) {
            // console.log("e")
            rand = randomChoice(arr);
        }
        ret.push(rand);
    }
    return ret;
}

function printWSleep(i, arr){
    if (i === 0){
        console.log(arr[i]);
        i++;
    }
    
    setTimeout(function(){
        console.log(arr[i]);
        if (i < arr.length-1) {
            printWSleep(i+1, arr);
        }
}, timeInterval)}


// console.log(chooseNonRepet(objetos, 4))

// AAAAAAAAAAAAAAAAAA para usar el puto sleep la clave es usar recursividad con el timeout que pajero que soy
function showElements(amount){
    elementsInOrder = chooseNonRepet(objetos, amount)
    i = 0;
    // printWSleep(i, elementsInOrder);
    console.log(elementsInOrder);
    return elementsInOrder;
}

function handleOneGuess(right, position){
    guess = prompt(`What was the number ${position}: `);
    return right === guess;
}



// Esta muy mal, tengo que hacer que pase un cierto tiempo mostrando uno por uno 
// las cosas a adivinar y despues recien arranque a preguntar
function playRound(amount) {
    if (amount > objetos.length){return false;}
    elementsInOrder = showElements(amount);
    // elementsInOrder = response;

    for (let i = 0; i < elementsInOrder.length; i++){
        // console.log(i);
        isCorrect = handleOneGuess(elementsInOrder[i], i+1)
        if (!isCorrect){
            console.log("EEEE - You messed up");
            return false
        };
        console.log(`Correct, it was ${elementsInOrder[i]}!!`);
    }
}
// showElements(3);
playRound(3)

/* 
let elementsInOrder = ["messi", "loba", "maradona", "sabueso"];
for (let i = 0; i < elementsInOrder.length; i++){
    console.log(i);
    isCorrect = handleOneGuess(elementsInOrder[i], i+1)
    if (!isCorrect){
        console.log("EEEE - You messed up");
        return false
    };
    console.log(`Correct, it was ${elementsInOrder[i]}!!`);
}
*/