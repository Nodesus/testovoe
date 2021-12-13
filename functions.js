// Закрытие и открытие модальных окон
function modalShow() {
    modal.style.display = 'flex';
}

function modalClose() {
    modal.style.display = 'none';
}

function secondModalShow() {
    second_modal.style.display = 'flex';
}

function secondModalClose() {
    second_modal.style.display = 'none';
}

//Показ результатов и скрытие стартовой кнопки
function resultsShow() {
    resultsWrapper.style.display = 'flex';
}

function startBtnHide() {
    start.style.display = 'none';
}

//Блокировка кнопки, если нет значения в инпуте
function blockBtn() {
    if (input.value.length === 0) {
        next.classList.add('non-active')
        next.setAttribute('disabled', 'disabled');
    };

    if (input.value.length !== 0) {
        next.classList.remove('non-active');
        next.removeAttribute('disabled', 'disabled');
    };
};

//Инпут работает с Enter
input.onkeypress = function (e) {
    if (e.keyCode == 13 && input.value.length !== 0) {
        next.click();
    };
};

//Начало
start.onclick = async () => {
    results = [];

    let ans = await question();
    blockBtn();

    console.log(ans);
}

//Заполнение примера
function fill() {
    let row = results[results.length - 1];
    firstNum.innerText = row.first;
    secondNum.innerText = row.second;
    input.value = '';
}

//Запись результата
function addAnswer() {
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
}

//Подсчет кол-ва правильных и неправильных ответов
function sumOfAnswers() {
    firstValueNum.innerText = parseInt(correct());
    secondValueNum.innerText = parseInt(wrong());
}

//Основной порядок действий
async function question(fin) {
    if (fin) {
        modalClose();
        secondModalClose();
        startBtnHide();
        resultsShow();
        sumOfAnswers();
        console.log('fin');
        return true;
    }

    add();
    fill();
    modalShow();
    blockBtn();

    return new Promise(resolve => {
        exit_btn.onclick = async () => {
            secondModalShow();

            return new Promise(resolve => {
                yes.onclick = async () => {
                    resolve(question(true));
                    console.log('secondFin');
                }

                no.onclick = async () => {
                    secondModalClose();
                    resolve(false);
                }
            })
        };

        next.onclick = () => {
            addAnswer();
            answer(parseInt(input.value));
            resolve(question());
        }
    })
}