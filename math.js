window.onload = function () {
    const numberOne = document.getElementById('1');
    if (typeof numberOne.innerText !== 'undefined') {
        numberOne.innerText = Math.floor(Math.random() * (101 - 1) + 1);
    };

    const numberTwo = document.getElementById('2');
    if (typeof numberTwo.innerText !== 'undefined') {
        numberTwo.innerText = Math.floor(Math.random() * (101 - 1) + 1);
    };

    const input = document.getElementById('input');
    if (input.value === '') {
        next.classList.add('non-active');
    };
};

function btn() {
    const numberOne = document.getElementById('1');
    const numberTwo = document.getElementById('2');
    const next = document.getElementById('next');
    const input = document.getElementById('input');
    numberOne.innerText = Math.floor(Math.random() * (101 - 1) + 1);
    numberTwo.innerText = Math.floor(Math.random() * (101 - 1) + 1);
    next.addEventListener('click', btn, false);

    document.getElementById('next').onclick = function () {
        const numberOne = document.getElementById('1');
        const numberTwo = document.getElementById('2');
        document.getElementById('1').value = document.getElementById('1').innerText;
        document.getElementById('2').value = document.getElementById('2').innerText;

        const answer = [numberOne.value, ' + ', numberTwo.value, ' = ', input.value];
        const result = answer.reduce((res, item) => res + item, '');

        const li = document.getElementById('li');


        const parent = document.getElementById('answers');
        const addLi = document.createElement('li');
        addLi.setAttribute('class', 'answer__item');
        addLi.setAttribute('id', 'li');
        parent.appendChild(addLi);
        li.insertAdjacentText("beforeend", result);

        const ol = document.getElementById('text');
        ol.style.display = 'none';

        const sum = +numberOne.value + +numberTwo.value;
        const value = input.value;
        if (sum != value) {
            li.classList.add('incorrect');
            li.classList.remove('correct');
        } else {
            li.classList.add('correct');
            li.classList.remove('incorrect')
        };
    };

    document.getElementById('input').value = '';

    if (input.value === '') {
        next.classList.add('non-active');
    };
};

function input() {
    const next = document.getElementById('next');
    const input = document.getElementById('input');

    if (typeof input.innerText !== 'undefined') {
        next.classList.remove('non-active');
    }
    if (input.value === '') {
        next.classList.add('non-active');
    };
};