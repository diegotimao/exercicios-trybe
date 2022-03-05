const btn = document.querySelector('#btn');
const span = document.querySelector('span');
let clickCount = 0;

btn.addEventListener('click', () => {
    clickCount += 1;

    span.innerText = clickCount;
});

