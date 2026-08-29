const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const countView = document.getElementById("countView");
let count = 0;

increase.onclick = function(){
    count++;
    countView.textContent = count;
}
decrease.onclick = function(){
    count--;
    countView.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countView.textContent = count;
}