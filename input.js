
let firstRow = document.querySelector('.input__first-row');
let secondRow = document.querySelector('.input__second-row');
let firstRowValue = 0;
let secondRowValue = 0;
let resultRow = document.querySelector('.input__result');

const sumCounter = () => {
  firstRowValue = +firstRow.value;
  secondRowValue = +secondRow.value;

  if (!isNaN(firstRowValue) && !isNaN(secondRowValue)) {
    let sum = firstRowValue + secondRowValue;
    resultRow.innerHTML = sum;
  }
}
