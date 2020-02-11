if(localStorage.getItem("isLogged") === null){
    localStorage.setItem("isLogged", "false")
}

function loadProfile() {
    var isLogged = localStorage.getItem("isLogged")
    if(isLogged == "true") {
        window.location.href = "profile.html"
    }else {
        alert("Please log in")
        window.location.href = "index.html"
    }
}

function logIn(){
    var loginForm = document.getElementById("login_form")
    var usernameInput = loginForm.elements["username_input"]
    var passInput = loginForm.elements["password_input"]
    if (usernameInput.value == "admin" && passInput.value == "admin") {
        localStorage.setItem("isLogged", "true")
        loadProfile()
    } else {
        alert("Wrong password, try again!")
        window.location.href = "index.html"
    }
    return false
}

function logOut(){
    localStorage.removeItem("isLogged")
    window.location.href = "index.html"
}

window.onload = function() {
    var currrentPath = window.location.pathname.split('/')
    var isLogged = localStorage.getItem("isLogged")
    if(currrentPath[currrentPath.length -1] == "profile.html" && isLogged == "false"){
        alert("Please log in")
        window.location.href = "index.html"
    }
}
