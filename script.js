let count = 0;
const number = document.getElementById('number');

document.getElementById('plus').addEventListener('click', function () {
    count = count + 1;
    number.textContent = count;
});

document.getElementById('minus').addEventListener('click', function () {
    count = count - 1;
    number.textContent = count;
});