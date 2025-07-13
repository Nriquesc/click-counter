let count = 0;

const countElm = document.getElementById("count");
const btnElm = document.getElementById("clickBtn");
const resetBtnElm = document.getElementById("resetBtn");

function increaseCount() {
    count += 1;
    countElm.textContent = count;
}

btnElm.addEventListener("click", increaseCount);

function resetCount() {
    count = 0;
    countElm.textContent = count;
}

resetBtnElm.addEventListener("click", resetCount);

