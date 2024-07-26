let newpassword=String(prompt("Enter a new password"));
let confirmnewpassword=String(prompt("Repeat your new password"));
if (newpassword===confirmnewpassword){
    console.log("password changed successfully");
}else {
    console.log("any of your passwords doesn't match");
}