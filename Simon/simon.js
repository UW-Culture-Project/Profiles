let colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
];

let colorButton = document.getElementsByClassName('color-button')[0];
let body = document.querySelector('body');
let clicks = 0;
colorButton.addEventListener('click', function () {
    console.log('clicked');
    body.style.backgroundColor = colors[clicks];
    clicks++;
    if (clicks == 7) {
        clicks = 0;
    }
})