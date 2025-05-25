let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let text = document.getElementById("text");
btn1.onclick = function(){
    text.innerHTML = "";
}
btn2.onclick = function(){
    text.innerHTML = "This is text";
}
