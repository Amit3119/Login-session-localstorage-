function RememberMe(){
    var name=document.getElementById("Username").value;
    var pass=document.getElementById("Password").value;

    localStorage.setItem("Username1",name)
    localStorage.setItem("Password1",pass)
    sessionStorage.setItem("Username1",name)
    sessionStorage.setItem("Password1",pass)
    document.getElementById("Username").value="";
    document.getElementById("Password").value="";
    alert("successfully remembered");
}
function login(){
    var user=document.getElementById("Username").value
    var pass=document.getElementById("Password").value
    var ul=localStorage.getItem("Username1");
    var pl=localStorage.getItem("Password1");
    
    if(user==ul && pass==pl)
    {
        localStorage.setItem("code","secret");
        window.location.href="homepage.html";
        alert("correct")
    }else{
        window.location.href="loginpage.html";
        alert("you have entered incorrect email and password");
    }
}