const start = document.getElementById('start__btn');
const modal = document.getElementById('main__modal');
const second_modal = document.getElementById('second__modal');
const choose = document.getElementById('exit__btn');
const yes = document.getElementById('yes__btn');
const no = document.getElementById('no__btn');
const resultsWrapper = document.getElementById('resultsWrapper');

start.onclick = function () {
    modal.style.display = 'flex';
    math(firstNum, secondNum);
};

choose.onclick = function () {
    second_modal.style.display = 'flex';
    start__btn.style.display = 'none';

    let choosePromise = new Promise((resolve) => {
        resolve('Завершить? ' + document.querySelectorAll('li').length);
    });

    console.log(choosePromise);
};

yes.onclick = function () {
    modal.style.display = 'none';
    second_modal.style.display = 'none';
    resultsWrapper.style.display = 'flex';

    let yesPromise = new Promise((resolve) => {
        resolve('Тест завершен');
    });

    console.log(yesPromise);
};


no.onclick = function () {
    second_modal.style.display = 'none';
};