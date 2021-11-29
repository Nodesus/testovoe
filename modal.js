const start = document.getElementById('start__btn');
const modal = document.getElementById('main__modal');
const second_modal = document.getElementById('second__modal');
const choose = document.getElementById('exit__btn');
const yes = document.getElementById('yes__btn');
const no = document.getElementById('no__btn');

start.onclick = function modact() {
    modal.style.display = 'flex';
};

choose.onclick = function () {
    second_modal.style.display = 'flex';
};

yes.onclick = function end() { //тут надо будет поправить, чтобы переводило на список//
    modal.style.display = 'none';
    second_modal.style.display = 'none';
};

no.onclick = function cont() {
    second_modal.style.display = 'none';
};