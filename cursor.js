
const body = document.querySelector("body");
const front = document.querySelector("#front");

body.addEventListener('mousemove', (e) => {
    front.style.top = `${e.clientY}px`;
    front.style.left = `${e.clientX}px`;
});