const count = 0;


const countHeader = document.getElementById("count");
const countAdd = document.getElementById("add");
const countSubtract = document.getElementById("subtract");

countHeader.innerText = count;

countAdd.addEventListener("click", () => {
    count++;
    countHeader.innerText= count;
});

countSubtract.addEventListener("click", () => {
    count--;
    countHeader.innerText = count;
});