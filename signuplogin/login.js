let Data = [];

(() => {
    Data = JSON.parse(localStorage.getItem("localsave"));

    const loginuser = JSON.parse(localStorage.getItem("localsave"))

    if (loginuser) {
        location.href = "content.html";
    }
})();

let signin = document.getElementById("sign-in");
signin.addEventListener("click", (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let email_error = document.getElementById("email_error");
    let password_error = document.getElementById("password_error");

    email_error.innerHTML = "";
    password_error.innerHTML = "";

    emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == "") {
        email_error.innerHTML = "Email is required"
        return;
    }else if (!emailregex.test(email)) {
        email_error.innerHTML = "Please enter valid email"
        return;
    }

    if (password == "") {
        password_error.innerHTML = "Password is required"
        return;
    }

    let isvalid = true;

    for (let i = 0; i < Data.length; i++) {
        if (Data[i].email == email && Data[i].password == password) {
            location.href = "content.html"

            localStorage.setItem("localsave", JSON.stringify(Data[i]));
            isvalid = false
        }
    }

if(isvalid);

});

document.getElementById("email").addEventListener("input", () => {
    email_error.innerHTML = ""
})

document.getElementById("password").addEventListener("input", () => {
    password_error.innerHTML = ""
})

window.history.forward();
            function noBack() {
            window.history.forward();
        }



