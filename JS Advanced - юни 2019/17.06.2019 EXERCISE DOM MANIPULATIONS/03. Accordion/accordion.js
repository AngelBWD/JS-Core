function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let text = document.getElementById("extra");



    if (button.textContent === "Less") {
        button.textContent = "More"
        text.style.display = "none"
    } else {
        text.style.display = "block"
        button.textContent = "Less"

    }
}