const start = document.getElementById('start__btn');
const modal = document.getElementById('main__modal');
const second_modal = document.getElementById('second__modal');
const choose = document.getElementById('exit__btn');
const yes = document.getElementById('yes__btn');
const no = document.getElementById('no__btn');
const resultsWrapper = document.getElementById('resultsWrapper');

start.onclick = function modact() {
    modal.style.display = 'flex';
};

choose.onclick = function () {
    second_modal.style.display = 'flex';
    start__btn.style.display = 'none';
};

const promise = new Promise((resolve, reject) => {

    yes.onclick = function end() {
        modal.style.display = 'none';
        second_modal.style.display = 'none';
        resultsWrapper.style.display = 'flex';

        return resolve(1);
    };

    no.onclick = function cont() {
        second_modal.style.display = 'none';
        return reject(2);
    };
});

console.log(promise);