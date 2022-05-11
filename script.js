const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");


// 97 - 122 ( min is 97- max is 122): those are the ascii character
let getRandomLower = () => String.fromCharCode(Math.floor((Math.random())*(122-97+1)+97));

let getRandomUpper = () => String.fromCharCode(Math.floor((Math.random())*(90-65+1)+65));

let getNumber = () => String.fromCharCode(Math.floor((Math.random())*(57-48+1)+48));

let getRandomSymbol = () => "!#$%&()*+,-./:;?@[\]^_"[Math.floor(Math.random()*21)];

let randomFunc= { "lower": getRandomLower,
                   "upper": getRandomUpper,
                   "number": getNumber,
                   "symbol": getRandomSymbol
                 }

generateBtn.addEventListener('click', ()=> {
    const length = +lengthEl.value;
    const hasLower = uppercaseEl.checked;
    const hasUpper = lowercaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSymbols = symbolsEl.checked;
    resultEl.innerHTML = generatePassword (hasLower, hasUpper, hasNumbers, hasSymbols, length);
})

function generatePassword (lower, upper, number, symbol, length){
    let password= '';
    const typesSelected = lower + upper + number + symbol;
    if (typesSelected === 0 ) {return ""};
    const typesSelectedArr = [{lower}, {upper}, {number}, {symbol}].filter(el=>Object.values(el)[0]);

    // i+=typesSelected: skip each time the number of selected checkboxes
    for (let i=0 ; i<length; i+=typesSelected) {
        typesSelectedArr.forEach(type => {
            password+= randomFunc[Object.keys(type)[0]]();
        })
    }
    return password.slice(0, length);
}

