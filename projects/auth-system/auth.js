function showRegister(){
    document.getElementById("loginBox").style.display="none";
    document.getElementById("registerBox").style.display="block";
}

function showLogin(){
    document.getElementById("loginBox").style.display="block";
    document.getElementById("registerBox").style.display="none";
}

/* REGISTER */
function register(){

    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    if(user && pass){

        localStorage.setItem("user",user);
        localStorage.setItem("pass",pass);

        alert("Account created successfully!");
        showLogin();

    }else{
        alert("Please fill all fields");
    }
}

/* LOGIN */
function login(){

    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if(user === savedUser && pass === savedPass){

        localStorage.setItem("session","active");

        document.getElementById("loginBox").style.display="none";
        document.getElementById("dashboard").style.display="block";

        document.getElementById("welcome").innerText =
        "Welcome " + user + " 👋";

        document.getElementById("profileInfo").innerText =
        "Username: " + user;

    }else{
        document.getElementById("msg").innerText="Invalid login details";
    }
}

/* LOGOUT */
function logout(){
    localStorage.removeItem("session");

    document.getElementById("dashboard").style.display="none";
    document.getElementById("loginBox").style.display="block";
}

/* SESSION CHECK */
window.onload = function(){

    if(localStorage.getItem("session") === "active"){

        document.getElementById("loginBox").style.display="none";
        document.getElementById("dashboard").style.display="block";

        let user = localStorage.getItem("user");

        document.getElementById("welcome").innerText =
        "Welcome " + user + " 👋";

        document.getElementById("profileInfo").innerText =
        "Username: " + user;
    }
}
