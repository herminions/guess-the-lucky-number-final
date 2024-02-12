let usedNumbers = [];
let maxNumber = 10
let luckyNumber = generateLuckyNumber();
let tries = 1;

function showText(tag , text){
    let line = document.querySelector(tag);
    line.innerHTML = text;
}

function initialMessage(){
    showText("h1" , `Guess the lucky number`);
    showText("p" , `Welcome! Please choose a number between 1 and 100.`);
}

initialMessage()

function generateLuckyNumber(){
    let generatedNumber = parseInt(Math.random() * maxNumber + 1);
    let maxTries = usedNumbers.length
    if(maxTries == maxNumber){
        usedNumbers = []
    }
    if(usedNumbers.includes(generatedNumber)){
        return generateLuckyNumber();
    } else{
        usedNumbers.push(generatedNumber);
        console.log(usedNumbers)
        return generatedNumber
    }
}

function checkGuess(){
    let guess = document.querySelector(`input`).value;
        if(guess == luckyNumber){
            let triesPlural = tries > 1 ? "tries" : "try";
            let winMessage = `Congratulations! You guessed the lucky number in ${tries} ${triesPlural}.`;
            showText(`h1` , `You did it!`);
            showText(`p` , winMessage ) ;
            document.getElementById(`reiniciar`).removeAttribute("disabled");
            document.getElementById(`chutar`).setAttribute("disabled" , true);
        }
        else{
            if(guess > luckyNumber){
            showText(`h1` , `Try again :(`);
            showText(`p` , `The lucky number is lower than ${guess}.`) ;
            eraseInputField()
            }
            else{
            showText(`h1` , `Try again :(`);
            showText(`p` , `The lucky number is higher than ${guess}.`) ;
            eraseInputField()
            }
        tries++
    }
}

function restartGame(){
    luckyNumber = generateLuckyNumber()
    tries = 1
    eraseInputField()
    initialMessage()
    document.getElementById(`reiniciar`).setAttribute("disabled" , true);
    document.getElementById(`chutar`).removeAttribute("disabled");
}
function eraseInputField(){
    guess = document.querySelector(`input`);
    guess.value = " "
}