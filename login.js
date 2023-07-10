window.onload = loginCheck;//Check to see if user is logged in already

function loginCheck(){
    if(sessionStorage.loggedInUsrName !== undefined){
        //Extract details of logged in user
        let userObj = JSON.parse(localStorage[sessionStorage.loggedInUsrName]);
    }
}

let cookies = document.cookie;

function login(){
    //Get name
    let username = document.getElementById("usernameInput").value;
    //If user does not have an account i.e. their information is not in local storage
    if(localStorage[username] === undefined){
        //Inform user that they do not have an account
        document.getElementById("success").innerHTML = ""
        document.getElementById("failure").innerHTML = "No username called " + username + " exists";
        return; //Do nothing else
    }
    else{//If user has an account, all their registered data is stored in the session storage, indicating that a login took place
        let userObj = JSON.parse(localStorage[username]);//Convert to object
        let password = document.getElementById("passwordInput").value;
        if(password === userObj.password){//Successful login
            sessionStorage.loggedInUsrName = userObj.username;
            sessionStorage.loggedInPassWord = userObj.password;
            sessionStorage.loggedInGender = userObj.gender;
            sessionStorage.loggedInNation = userObj.nationality;
            sessionStorage.loggedInDob = userObj.dob;
            sessionStorage.loggedInEmail = userObj.email;
            sessionStorage.loggedInPhone = userObj.phone;
            sessionStorage.amateur = userObj.amateurscore;
            sessionStorage.legend = userObj.legendscore;

            //clear the failure ID message and redirect to Cardflip.php
            document.getElementById("failure").innerHTML = "";
            window.location.replace("Cardflip.php");
            
        }
        else{
            //On incorrect password, an error message appears
            document.getElementById("success").innerHTML = "";
            document.getElementById("failure").innerHTML = "Incorrect Password";
        }
    }
}