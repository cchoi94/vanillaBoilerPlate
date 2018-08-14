import '../styles/main.scss';

var greeting = document.querySelector('.greeting');
var btn = document.querySelector('.changeColorBtn')

btn.addEventListener('click', () => {
    greeting.classList.toggle("blue")
})