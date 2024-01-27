document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("button");
    button.addEventListener("click", clickHandler);
  });

function clickHandler() {
    let container = document.getElementById("container");
    let toHide = document.getElementById("toHide");
    initialize(toHide);
    setTimeout(function() {
        color(container, "green");
    }, 180 * 1000);
    setTimeout(function() {
        color(container, "yellow");
    }, 210 * 1000);
    setTimeout(function() {
        color(container, "red");
    }, 240 * 1000);
}

function color(container, color) {
    container.style.background = color;
    setTimeout(function() {
        if (color == "red") {
            let toHide = document.getElementById("toHide");
            finish(toHide);
        }
        container.style.background = "white";
    }, 3000);
}

function initialize(toHide) {
    toHide.style.display = "none";
}

function finish(toHide) {
    toHide.style.display = "flex";
}