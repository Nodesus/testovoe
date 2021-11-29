window.onload = function () {
    const numberOne = document.getElementById('1');
    if (typeof numberOne.innerHTML !== 'undefined') {
        numberOne.innerHTML = Math.floor(Math.random() * (101 - 1) + 1);
    };

    const numberTwo = document.getElementById('2');
    if (typeof numberTwo.innerHTML !== 'undefined') {
        numberTwo.innerHTML = Math.floor(Math.random() * (101 - 1) + 1);
    };

    const input = document.getElementById("input");
    if (input.value == '') {
        next.classList.add('non-active');
    };
};

function btn() {
    const numberOne = document.getElementById('1');
    const numberTwo = document.getElementById('2');
    const next = document.getElementById("next");
    const input = document.getElementById("input");
    numberOne.innerHTML = Math.floor(Math.random() * (101 - 1) + 1);
    numberTwo.innerHTML = Math.floor(Math.random() * (101 - 1) + 1);
    next.addEventListener("click", btn, false);

    document.getElementById("next").onclick = function sub() {
        const div = document.getElementById("div");
        div.innerHTML = input.value;
    };

    document.getElementById("input").value = '';

    if (input.value == '') {
        next.classList.add('non-active');
    };
};

function input() {
    const next = document.getElementById("next");
    const input = document.getElementById("input");

    if (typeof input.innerHTML !== 'undefined') {
        next.classList.remove('non-active');
    }
    if (input.value == '') {
        next.classList.add('non-active');
    };
};