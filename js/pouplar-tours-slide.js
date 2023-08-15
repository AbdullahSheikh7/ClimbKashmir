let one = document.getElementsByClassName("ball")[0];
let three = document.getElementsByClassName("ball")[1];

let slides = document.getElementById("slides");

let left = 0;

one.addEventListener("click", (e) => {
    left += 350;
    slides.style.left = left + "px";
    if (left > 0) {
        left = 0;
        slides.style.left = left + "px";
    }
});

three.addEventListener("click", (e) => {
    left -= 350;
    slides.style.left = left + "px";
    if (left < screen.width - slides.clientWidth) {
        left = screen.width - slides.clientWidth;
        slides.style.left = left + "px";
    }
});
