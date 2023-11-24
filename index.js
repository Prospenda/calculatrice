// Events button 
const screen = document.querySelector('input');
const buttons = document.querySelectorAll('.number');
      buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(screen.value == "0"){
            screen.value = button.innerText;
        } else (screen.value += button.innerText)
       
    })
})
// variable de stock
let stockValue = "";
// Events return
const returnButton = document.querySelector('.return');
returnButton.addEventListener('click', () => {
    screen.value = screen.value.slice(0, -1);
})

// Events clear
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    screen.value = '';
})

// Events operation
// Event division
const divisionButton = document.querySelector('.division');
divisionButton.addEventListener('click', () => {
stockValue += screen.value+'/';
screen.value = "0";
})
// Event multiplication
const multiplicationButton = document.querySelector('.multiplication');
multiplicationButton.addEventListener('click', () => {
    stockValue += screen.value+'*';
    screen.value = "0";
})
// Event minus
const minusButton = document.querySelector('.minus');
minusButton.addEventListener('click', () => {
    stockValue += screen.value+'-';
screen.value = "0";;
})
// Event plus

const plusButton = document.querySelector('.plus');
plusButton.addEventListener('click', () => {
    stockValue += screen.value+'+';
    screen.value = "0";
})
// Events equal
const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
stockValue += screen.value;
screen.value = eval(stockValue);
console.log(stockValue)
stockValue = '';
})