let btn = document.getElementById("toggleButton");
let darkLight = false;
btn.onclick = function(){
    if(darkLight === false){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkLight = true;
    }else{
        document.body.style.background = "white";
        document.body.style.color = "black";
        darkLight = "false";
    }
}