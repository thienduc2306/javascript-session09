let boxGreen = document.getElementById("boxgreen");
let boxRed = document.getElementById("boxred");
let boxPurple = document.getElementById("boxpurple");


function changeBackground(color) {
    if (color === "green") {
        document.body.style.backgroundColor = "green"
    } else if (color === "red") {
        document.body.style.backgroundColor = "red"
    } else if (color === "purple") {
        document.body.style.backgroundColor = "purple"
    }
}
boxGreen.onclick = function() {
changeBackground("green");
};
boxRed.onclick = function() {
changeBackground("red");
};
boxPurple.onclick = function() {
changeBackground("purple");
};