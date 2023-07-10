<!--Login page-->
<!---->
<!--Setting up a div tag for login and register navigation. No PHP provided for this to enable usage of font-awesome icons-->
<div class="prenav">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <!--Hyperlinks to login and register-->
    <a href="#login">
        <i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Log In
    </a>
    <a href="Register.php">
        <i class="fa-solid fa-user-plus"></i>&nbsp;&nbsp;Register
    </a>
</div>
<!--Using php to put navigation bar-->
<?php
    include('commonguest.php');
    myheader("CardFlip-Login");
    bannerNavigation("Login");
?>
<br><br><br><br><br>
<!--Making a login form using div to ask for credentials-->
<div id="login">
    <b>
        <p style="font-size: 30px;">
            <i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;LOGIN
        </p>
    </b>
    <br><br>
    <!--Asking for username-->
    Username:&nbsp;<input type="text" id="usernameInput">
    <br><br>
    <!--Asking for password-->
    Password:&nbsp;&nbsp;<input type="password" id="passwordInput">
    <br><br><br><b>
        <!--These would include message depending on credentials entered by the user-->
        <p id="success" style="color: #649E57; font-family: Copperplate Gothic Light;"></p>
        <p id="failure" style="color: #B50906; font-family: Copperplate Gothic Light;"></p>
    </b><br><br><br>
    <!--button added with inline styling and onclick-->
    <button id="signin"
        style="background-color: rgb(137, 210, 110); color: rgb(255, 255, 255); width: 235; height: 35; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; border-color: rgb(99, 171, 73); border-style: solid;"
        onclick="login()">
        <i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Sign In!
    </button>
    <!--Linking with JS page-->
    <script src="login.js?v=<?php echo time(); ?>">
    </script>
    <br><br><br>
    ___________________________________________________
    <br><br>
    <!--button added with inline styling and hyperlink-->
    <a href="Register.php">
        <button id="signup"
            style="background-color: rgb(113, 156, 243); color: rgb(255, 255, 255); width: 235; height: 35; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; border-color: rgb(64, 105, 187); border-style: solid;">
            <i class="fa-solid fa-user-plus"></i>&nbsp;&nbsp;Sign Up!
        </button>
    </a>
</div>
<br><br><br><br><br><br><br><br>
<!--Background music added-->
<embed src="Fill the Void.mp3" autostart="true" loop="true" height="0" width="0">
<br><br>
<!--Setting up footer. PHP was not used for this to use the font-awesome icons. Placeholder links are added for hyperlinks as social media accounts for CardFlip do not exist-->
<div class="footer">
    <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
    <a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
    <a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>
    <a href="https://www.gmail.com"><i class="fa-solid fa-envelope"></i></a>
</div>