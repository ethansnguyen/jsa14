userName=localStorage.getItem("username")
console.log(userName);
password=localStorage.getItem("password")
console.log(password);
inputUsernameSI = document.getElementById("usrnameSI");
inputPasswordSI = document.getElementById("passwordSI");
buttonSI = document.getElementById("buttonSI")
btnSI.addEventListener("click", function() {
if(inputUsernameSI == userName){
    
}
else{
    alert("sai ten dang nhap hoac mat khau")
}
})
