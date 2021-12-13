var results = [];

function rand() {
    return Math.floor(Math.random() * (101 - 1) + 1);
}

function add(cond) {
    let first = rand(),
        second = rand(),
        res = first + second;
    results.push({
        first,
        second,
        res
    });
}

function answer(value) {
    results[results.length - 1].answer = value;
}

function correct() {
    return results.reduce((prev, current) => prev += current.res == current.answer ? 1 : 0, 0);
}

function wrong() {
    return results.length - correct() - 1;
}