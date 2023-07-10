//Added as an onclick function to logout button and connected with all logged in files using common.php
//If a logged in user clicks logout, their session storage data is erased and since logout button is a hyperlink, the user is directed to guest home page
function logout(){
    sessionStorage.clear();
}