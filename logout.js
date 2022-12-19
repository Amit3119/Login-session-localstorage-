
let loginbutton = document.querySelector(".log_out");

let user = document.getElementById("Username1");
let pass = document.getElementById("Password1");

loginbutton.onclick = ()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    loginbutton.innerHTML = "<div class='loader'></div>";
    setTimeout(()=>{
        location.replace("login.html")
    },3000)
}