let btn = Array.from(document.getElementsByTagName("button"));
let error = document.getElementById("error")

btn.forEach((_, i) => {
    btn[i].addEventListener("click", (e) => {
        error.style.left = "50px";
        setTimeout(() => {
            error.style.left = "-50%";
        }, 5000);
    });
});
