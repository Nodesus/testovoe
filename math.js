const firstNum = document.getElementById('firstNum');
const secondNum = document.getElementById('secondNum');
const input = document.getElementById('input');
const next = document.getElementById('next');
const firstValueNum = document.getElementById('firstValueNum');
const secondValueNum = document.getElementById('secondValueNum');

next.addEventListener('click', btn, false);

if (input.value.length === 0) {
    next.classList.add('non-active')
    next.setAttribute('disabled', 'disabled');
};

function math(firstNum, secondNum) {
    firstNum.innerText = Math.floor(Math.random() * (101 - 1) + 1);
    secondNum.innerText = Math.floor(Math.random() * (101 - 1) + 1);
};

function sum(firstValueNum, secondValueNum) {
    firstValueNum.innerText = document.getElementsByClassName('correct').length;
    secondValueNum.innerText = document.getElementsByClassName('incorrect').length;
}

input.oninput = function color() {
    if (input.value.length === 0) {
        next.classList.add('non-active')
        next.setAttribute('disabled', 'disabled');
    };

    if (input.value.length !== 0) {
        next.classList.remove('non-active');
        next.removeAttribute('disabled', 'disabled');
    };
};

next.onclick = function () {
    firstNum.value = firstNum.innerText;
    secondNum.value = secondNum.innerText;

    let answer = [firstNum.value, ' + ', secondNum.value, ' = ', input.value];
    let result = answer.reduce((res, item) => res + item, '');

    let answers = document.getElementById('answers');
    let fragment = document.createDocumentFragment();
    let li = document.createElement('li');

    if (result !== 'undefined') {
        li.textContent = result;
        fragment.appendChild(li);
    };

    answers.appendChild(fragment);

    let sum = +firstNum.value + +secondNum.value;
    let value = input.value;

    if (sum != value) {
        li.classList.add('incorrect');
        li.classList.remove('correct');
    } else {
        li.classList.add('correct');
        li.classList.remove('incorrect')
    };

    let nextPromise = new Promise((resolve) => {
        resolve('Продолжить ' + document.querySelectorAll('li').length);
    });

    console.log(nextPromise);
};

function btn() {
    math(firstNum, secondNum);
    sum(firstValueNum, secondValueNum);

    input.value = '';

    if (input.value === '') {
        next.classList.add('non-active');
        next.setAttribute('disabled', 'disabled');
    };
};

input.onkeypress = function (e) {
    if (e.keyCode == 13 && input.value.length !== 0) {
        next.click();
    };
};