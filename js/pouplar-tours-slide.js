let one = document.getElementsByClassName("ball")[0];
let two = document.getElementsByClassName("ball")[1];
let three = document.getElementsByClassName("ball")[2];

let slides = document.getElementById("slides");

one.addEventListener("click", (e) => {
    slides.style.left = 0;
    one.classList.add("active-ball");
    two.classList.remove("active-ball");
    three.classList.remove("active-ball");
});

two.addEventListener("click", (e) => {
    slides.style.left = "-900px";
    one.classList.remove("active-ball");
    two.classList.add("active-ball");
    three.classList.remove("active-ball");
});

three.addEventListener("click", (e) => {
    slides.style.left = "-1800px";
    one.classList.remove("active-ball");
    two.classList.remove("active-ball");
    three.classList.add("active-ball");
});
