const minusButton = document.querySelector(".minusButton");
const addButton = document.querySelector(".addButton");
const refreshButton = document.querySelector(".refreshButton");
let countElement = document.querySelector("#count");
let count = 0;



console.log(minusButton, addButton, count, refreshButton);


minusButton.addEventListener("click", function() {
    count--;
    countElement.textContent = count
});

addButton.addEventListener("click", function() {
    count++;
    countElement.textContent = count
});

refreshButton.addEventListener("click", function() {
    count = 0
    countElement.textContent = count;
});

