import './style.css'


const counter = document.querySelector("#num");
let num = Number(counter.innerText);


const add = document.querySelector("#add");
const sub = document.querySelector("#subtract");
const reset = document.querySelector("#reset");


add.addEventListener("click", () => {

    
    num += 1;

    if (num > 0) {
        sub.style.backgroundColor = "#3A80FB";
        sub.disabled = false;
        sub.classList.remove("pointer-events-none");

    }


    counter.innerText = num;
});

sub.addEventListener("click", () => {

    num > 0 ? num -= 1 : num;

    counter.innerText = num;

    if (num === 0) {
        sub.style.backgroundColor = "#D1D5DB";
        sub.disabled = true;
        sub.classList.add("pointer-events-none");
        
    }

});


reset.addEventListener("click", () => {
    
    num = 0;
    counter.innerText = num;

    sub.style.backgroundColor = "#D1D5DB";
    sub.disabled = true;
    sub.classList.add("pointer-events-none");
});


