let submit = document.getElementById("button")
submit.addEventListener("click", function () {
    let inputName = document.getElementById("name").value
    console.log(inputName);
    let inputUsername = document.getElementById("username").value
    console.log(inputUsername);
    let inputPassword = document.getElementById("password").value
    console.log(inputPassword);
    localStorage.setItem("name",inputName)
    localStorage.setItem("username",inputUsername)
    localStorage.setItem("password", inputPassword)
})