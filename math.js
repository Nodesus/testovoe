const firstNum = document.getElementById('firstNum');
const secondNum = document.getElementById('secondNum');
const input = document.getElementById('input');
const next = document.getElementById('next');
const firstValueNum = document.getElementById('firstValueNum');
const secondValueNum = document.getElementById('secondValueNum');

next.addEventListener('click', btn, false);

firstNum.innerText = Math.floor(Math.random() * (101 - 1) + 1);
secondNum.innerText = Math.floor(Math.random() * (101 - 1) + 1);

if (input.value === '') {
    next.classList.add('non-active')
};

input.oninput = function color() {
    if (typeof input.innerText !== '') {
        next.classList.remove('non-active');
    } else if (typeof input.innerText === '') {
        next.classList.add('non-active');
    }
};

document.getElementById('next').onclick = function () {
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
};

function btn() {
    firstNum.innerText = Math.floor(Math.random() * (101 - 1) + 1);
    secondNum.innerText = Math.floor(Math.random() * (101 - 1) + 1);

    firstValueNum.innerText = document.getElementsByClassName('correct').length;
    secondValueNum.innerText = document.getElementsByClassName('incorrect').length;

    input.value = '';

    if (input.value === '') {
        next.classList.add('non-active');
    };
};

document.getElementById('input').onkeypress = function (e) {
    if (e.keyCode == 13 && input.value !== '') {
        document.getElementById('next').click();
    };
};