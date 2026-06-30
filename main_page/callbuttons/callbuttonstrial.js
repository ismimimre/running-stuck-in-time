const heading = document.getElementById('header');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');


one.addEventListener('click', () => {
    heading.textContent += '1';
});
two.addEventListener('click', () => {
    heading.textContent += '2';
});
three.addEventListener('click', () => {
    heading.textContent += '3';
});
four.addEventListener('click', () => {
    heading.textContent += '4';
});
five.addEventListener('click', () => {
    heading.textContent += '5';
});
six.addEventListener('click', () => {
    heading.textContent += '6';
});
seven.addEventListener('click', () => {
    heading.textContent += '7';
});
eight.addEventListener('click', () => {
    heading.textContent += '8';
});
nine.addEventListener('click', () => {
    heading.textContent += '9';
});
zero.addEventListener('click', () => {
    heading.textContent += '0';
});