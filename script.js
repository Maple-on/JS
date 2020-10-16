let input = document.createElement('input');
document.body.prepend(input);
input.classList.add('view');
input.placeholder = '0';
let box = document.body.querySelector('.box');
let arr = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0],
];

let rows;
let cell;

for (let row of arr) {
    rows = document.createElement('div')
    box.append(rows)
    rows.classList.add('row')
    for (let item of row) {
        cell = document.createElement('div')
        rows.append(cell)
        cell.classList.add('button')
    }
    cell.classList.add('orange')
}



let firstRow = [];
firstRow = box.firstElementChild.childNodes;

let SecondRow = [];
SecondRow = box.firstElementChild.nextSibling.childNodes;

let ThirdRow = [];
ThirdRow = box.firstElementChild.nextSibling.nextSibling.childNodes;

let ForthRow = [];
ForthRow = box.lastElementChild.previousSibling.childNodes;

let FifthRow = [];
FifthRow = box.lastElementChild.childNodes;

for (let elem of firstRow) {
    elem.classList.add('firstRow')
}
let zero = box.lastChild.firstChild;
zero.style.width = '103px';
zero.style.borderRadius = '15px';

let elemAC = firstRow[0];
elemAC.innerText = 'AC';
elemAC.addEventListener('click', function(event) {
    input.value = '';
})

let elemPlusMinus = firstRow[1];
elemPlusMinus.innerText = '+/-';
elemPlusMinus.addEventListener('click', function(event) {
    insert('-');
})

let elemPercent = firstRow[2];
elemPercent.innerText = '%';
elemPercent.addEventListener('click', function(event) {
    input.value = input.value / 100;
})

let elemDivide = firstRow[3];
elemDivide.innerText = '/';
elemDivide.addEventListener('click', function(event) {
    insert('/');
})

let elemSeven = SecondRow[0];
elemSeven.innerText = '7';
elemSeven.addEventListener('click', function(event) {
    insert(7);
})

let elemEight = SecondRow[1];
elemEight.innerText = '8';
elemEight.addEventListener('click', function(event) {
    insert(8);
})

let elemNine = SecondRow[2];
elemNine.innerText = '9';
elemNine.addEventListener('click', function(event) {
    insert(9);
})

let elemMultiply = SecondRow[3];
elemMultiply.innerText = 'x';
elemMultiply.addEventListener('click', function(event) {
    insert('*');
})

let elemFour = ThirdRow[0];
elemFour.innerText = '4';
elemFour.addEventListener('click', function(event) {
    insert(4);
})

let elemFive = ThirdRow[1];
elemFive.innerText = '5';
elemFive.addEventListener('click', function(event) {
    insert(5);
})

let elemSix = ThirdRow[2];
elemSix.innerText = '6';
elemSix.addEventListener('click', function(event) {
    insert(6);
})

let elemMinus = ThirdRow[3];
elemMinus.innerText = '-';
elemMinus.addEventListener('click', function(event) {
    insert('-');
})

let elemOne = ForthRow[0];
elemOne.innerText = '1';
elemOne.addEventListener('click', function(event) {
    insert(1);
})

let elemTwo = ForthRow[1];
elemTwo.innerText = '2';
elemTwo.addEventListener('click', function(event) {
    insert(2);
})

let elemThree = ForthRow[2];
elemThree.innerText = '3';
elemThree.addEventListener('click', function(event) {
    insert(3);
})

let elemPlus = ForthRow[3];
elemPlus.innerText = '+';
elemPlus.addEventListener('click', function(event) {
    insert('+');
})

let elemZero = FifthRow[0];
elemZero.addEventListener('click', function(event) {
    insert(0);
})
elemZero.innerText = '0';

let elemDot = FifthRow[1];
elemDot.innerText = ',';
elemDot.addEventListener('click', function(event) {
    insert('.');
})

let elemEqual = FifthRow[2];
elemEqual.innerText = '=';
elemEqual.addEventListener('click', function(event) {
    input.value = eval(input.value)
})

function insert(num) {
    input.value = input.value + num;
}