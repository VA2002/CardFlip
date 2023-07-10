<!--Game difficulty page for logged in user-->
<!---->
<!--Setting up a div tag for profile and logout navigation. No PHP provided for this to enable usage of font-awesome icons-->
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
    &nbsp;&nbsp;&nbsp;
     <!--Hyperlinks to profile and logging out-->
    <a href="Profile.php">
        <i class="fa-solid fa-user"></i> &nbsp;&nbsp;My Profile
    </a>
    <a class = "logout" href="CardFlipGuest.php" onclick = "logout()">
        <i class="fa-solid fa-right-from-bracket"></i>&nbsp;&nbsp;Logout
    </a>
</div>
<!--Using php to put navigation bar-->
<?php
    include('common.php');
    myheader("CardFlip-Play");
    bannerNavigation("<i class=\"fa-solid fa-play\"></i>&nbsp;Play");
?>
<br><br><br><br><br><br><br><br>
<!--Doing inline styling in the p tag and adding buttons in it, each of which is provided with a hyperlink-->
<p style="font-size: 30; color: white;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href = "PlayRookie.php">
        <button type="button" style="background-color: rgb(127, 192, 67); font-size: 27px;">
            Rookie
        </button>
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href = "PlayAmateur.php">
        <button type="button" style="background-color: rgb(31, 98, 161); font-size: 27px;">
            Amateur
        </button>
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href = "PlayLegend.php">
        <button type="button" style="background-color: rgb(157, 39, 16); font-size: 27px;">
            Legend
        </button>
    </a>
</p>
<br><br><br><br>
<br><br><br><br>
<br><br><br><br>
<!--Background music-->
<embed src="Playlist3.mp3" autostart = "true" loop = "true" height="0" width="0">
<!--Setting up footer. PHP was not used for this to use the font-awesome icons. Placeholder links are added for hyperlinks as social media accounts for CardFlip do not exist-->
<div class = "footer">
    <a href = "https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
    <a href = "https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
    <a href = "https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>
    <a href = "https://www.gmail.com"><i class="fa-solid fa-envelope"></i></a>
</div>
  