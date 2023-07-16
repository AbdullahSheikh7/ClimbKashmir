let dropdownArray = Array.from(document.getElementsByClassName("dropdown"));

const hideAllDropdown = (dropdownArray) => {
    dropdownArray.forEach((_, i) => {
        dropdownArray[i].lastElementChild.style.display = "none";
    });
}

const main = () => {
    document.body.addEventListener("click", (e) => {
        let dropdown = e.path[0].closest(".dropdown");

        if (e.path[2].classList.toString() == "dropdown" && e.path[0].matches("li")) {
            e.path[1].previousElementSibling.children[1].innerHTML = e.path[0].innerHTML;
        }

        try {
            if (dropdown.lastElementChild.style.display == "none") {
                hideAllDropdown(dropdownArray);
                dropdown.lastElementChild.style.display = "block";
            } else {
                dropdown.lastElementChild.style.display = "none";
            }
        } catch (error) {
            hideAllDropdown(dropdownArray);
        }
    });
}

main();
