const h1 = document.querySelector("h1");
const text = h1.textContent;
h1.textContent = "";

let index = 0;
const intervalId = setInterval(function () {
    h1.textContent += text[index];
    index++;
    if (index === text.length) {
        clearInterval(intervalId);
    }
}, 100);
