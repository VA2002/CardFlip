//function to store the user in localstorage. In other words, registering the user for this website (exclusive to this device)
function storeUser(){
    //Building object that we are going to store
    var userObject = {};
    userObject.username = document.getElementById("UsernameInput").value;
    userObject.password = document.getElementById("PasswordInput").value;
    userObject.gender = document.getElementById("GenderInput").value;
    userObject.nationality = document.getElementById("CountryInput").value;
    userObject.dob = document.getElementById("DobInput").value;
    userObject.email = document.getElementById("EmailInput").value;
    userObject.phone = document.getElementById("PhoneInput").value;
    userObject.amateurscore = 0;
    userObject.legendscore = 0;

    //validation function, as a subfunction of storeUser
    function validate(){
        //introducing some variables
        let username = document.getElementById("UsernameInput").value;
        let password = document.getElementById("PasswordInput").value;
        let gender = document.getElementById("GenderInput").value;
        let nationality = document.getElementById("CountryInput").value;
        let dob = document.getElementById("DobInput").value;
        let email = document.getElementById("EmailInput").value;
        let phone = document.getElementById("PhoneInput").value;
        //this is a format being established for the email ID entered by user. With this, the format of text@text.com becomes compulsory in order to register
        var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        //in case the required areas are empty or email is not in correct format, a message is displayed
        if (username === "" || password === "" || dob === "" || email === "" || username === " " || password === " " || dob === " " || email === " " || !email.match(emailFormat)){
            document.getElementById("success").innerHTML = "";
            document.getElementById("failure").innerHTML = "Registration incomplete/inappropriate";
        }
        //if registration form is filled appropriately, user is stored in localstorage and a message is displayed to indicate the same
        else{
            //Store user if unregistered
            localStorage[userObject.username] = JSON.stringify(userObject);
            document.getElementById("failure").innerHTML = "";
            document.getElementById("success").innerHTML = "Registration successful. Welcome " + userObject.username + "!";
            return true;   
        }
    }
    //calling function
    validate();
}