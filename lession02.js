let form = document.getElementById("loginForm");
let submitLogin = document.getElementById("submit");
let username = document.getElementById("username");
let password = document.getElementById("password");

form.onsubmit = function(event){
    event.preventDefault();
}

submitLogin.onclick = function(){
    if(username.value === "huanrose@gmail.com" && password.value === "123456"){
        console.log("Đăng nhập thành công");
    }else{
        console.log("Đăng nhập thất bại");
    }
}