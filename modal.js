const start = document.getElementById("start__btn");
const modal = document.getElementById("main__modal");
const closes = document.getElementById("exit__btn");

start.onclick = function modact() {
    modal.style.display = 'flex';
};

closes.onclick = function () {
    modal.style.display = 'none';
};