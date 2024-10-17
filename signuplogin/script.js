let Data = [];

// (() => {
//     Data = JSON.parse(localStorage.getItem("localsave"));
//     const loginuser = JSON.parse(localStorage.getItem("localsave"));
// if (loginuser) {
//     location.href = "content.html";
// }
// })();
let signupbtn = document.getElementById("signupbtn")
signupbtn.addEventListener("click", (e) => {
    e.preventDefault()
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();
let confirmpassword = document.getElementById("confirmpassword").value.trim();
let address = document.getElementById("address").value.trim();
let dob = document.getElementById("dob").value.trim();
let gender = document.getElementById("gender").value.trim();
let country = document.getElementById("country").value.trim();
let city = document.getElementById("city").value.trim();
let zip = document.getElementById("zip").value.trim();
let number = document.getElementById("number").value.trim();
let message = document.getElementById("success_message");
let name_error = document.getElementById("name_error");
let email_error = document.getElementById("email_error");
let password_error = document.getElementById("password_error");
let confirmpassword_error = document.getElementById("confirmpassword_error");
let address_error = document.getElementById("address_error");
let dob_error = document.getElementById("dob_error");
let gender_error = document.getElementById("gender_error");
let country_error = document.getElementById("country_error");
let phoneNumber_error = document.getElementById("phoneNumber_error");
let city_error = document.getElementById("city_error");
let zip_error = document.getElementById("zip_error");
nameregex = /^[A-Za-z]+$/;
emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let isValid = true;
if (name == "") {
    name_error.innerHTML = "Name is required"
    isValid = false;
}
else if (!nameregex.test(name)) {
    name_error.innerHTML = "Only Alphabets Allowed";
    isValid = false;
}
if (email == "") {
    email_error.innerHTML = "Email is required"
    isValid = false;
}
else if (!emailregex.test(email)) {
    email_error.innerHTML = "Please enter valid email"
    isValid = false;
}
for (let i = 0; i < Data.length; i++) {
    if (Data[i].email == email) {
        message.innerHTML = `<div class="alert alert-dark" role="alert"> your Email already registerd </div>`
        setTimeout( () => {
            message.innerHTML = "";
        },3000)
    isValid = false;
    } 
}
if (password == "" && confirmpassword == "") {
    password_error.innerHTML = "Password is required"
    confirmpassword_error.innerHTML = "confirm password is required"
    isValid = false;
}
else if(password.length < 8 && confirmpassword.length < 8){
    password_error.innerHTML = "Password should be at least 8 characters long"
    confirmpassword_error.innerHTML = "password do not match"
    isValid = false;
}
if(document.getElementById("confirmpassword").value != document.getElementById("password").value){
    confirmpassword_error.innerHTML = "password do not match"
    isValid = false;
}

if (address == "") {
    address_error.innerHTML = "Address is required"
    isValid = false;
}
if (dob == "") {
    dob_error.innerHTML = "Date of Birth is required"
    isValid = false;
}
if (gender == "") {
    gender_error.innerHTML = "Gender is required"
    isValid = false;
}
if (country == "") {
    country_error.innerHTML = "Country is required"
    isValid = false;
}
if (city == "") {
    city_error.innerHTML = "City is required"
    isValid = false;
}
if (number == "") {
    phoneNumber_error.innerHTML = "Phone Number is required"
    isValid = false;
}
if (zip == "") {
    zip_error.innerHTML = "Zip Code is required"
    isValid = false;
}
if(isValid)
userData = {
    name,
    email,
    password,
    confirmpassword,
    address,
    dob,
    gender,
    country,
    city,
    number,
    zip
};
Data.push(userData);
let storage = JSON.stringify(Data);
localStorage.setItem("localsave",storage);
document.getElementById("reset").reset();
message.innerHTML = `<div class="alert alert-dark" role="alert">
  Sign Up successful
</div>`;
setTimeout(() => {
    message.innerHTML = "";
}, 3000);
});
let name = document.getElementById("name").addEventListener("input", () => {
    name_error.innerHTML = ""
});
let email = document.getElementById("email").addEventListener("input", () => {
    email_error.innerHTML = ""
});
let password = document.getElementById("password").addEventListener("input", () => {
    password_error.innerHTML = ""
});
let confirmpassword = document.getElementById("confirmpassword").addEventListener("input", () => {
    confirmpassword_error.innerHTML = ""
});
let address = document.getElementById("address").addEventListener("input", () => {
    address_error.innerHTML = ""
});
let dob = document.getElementById("dob").addEventListener("input", () => {
    dob_error.innerHTML = ""
});
let gender = document.getElementById("gender").addEventListener("input", () => {
    gender_error.innerHTML = ""
});
let country = document.getElementById("country").addEventListener("input", () => {
    country_error.innerHTML = ""
});
let city = document.getElementById("city").addEventListener("input", () => {
    city_error.innerHTML = ""
});
let zip = document.getElementById("zip").addEventListener("input", () => {
    zip_error.innerHTML = ""
});
let phoneNumber = document.getElementById("number").addEventListener("input", () => {
    phoneNumber_error.innerHTML = ""
});
        //     function noBack() {
        //     window.history.forward();
        // }
       