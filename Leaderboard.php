<!--Leaderboard page after logging in-->
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
    <!--Setting hyperlinks to profile and logging out-->
    <a href="Profile.php">
        <i class="fa-solid fa-user"></i> &nbsp;&nbsp;My Profile
    </a>
    <a class="logout" href="CardFlipGuest.php" onclick="logout()">
        <i class="fa-solid fa-right-from-bracket"></i>&nbsp;&nbsp;Logout
    </a>
</div>
<!--Using php to put navigation bar-->
<?php
    include('common.php');
    myheader("CardFlip-Leaderboard");
    bannerNavigation("<i class=\"fa-solid fa-crown\"></i>&nbsp;Leaderboard");
?>
<br><br><br><br><br><br>
<!--Putting a table tag on the page with desired cellspacing and cellpadding, along with rows and columns. This is alligned in center using center tag-->
<!--IDs added for JS-->
<center>
    <table border="2" cellspacing="3" cellpadding="12">
        <tr>
            <th colspan="6" style="background-color: rgb(74, 60, 26); font-size: 30px;" onclick="getUsers()">Leaderboard
            </th>
        </tr>
        <tr>
            <th colspan="3" style="background-color: rgb(25, 61, 190)">Amateur</th>
            <th colspan="3" style="background-color: rgb(239, 54, 54);">Legend</th>
        </tr>
        <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
        </tr>
        <tr>
            <td style="background-color: rgb(255, 217, 0);">1</td>
            <td id="username1A" style="background-color: rgb(255, 217, 0);"></td>
            <td id="score1A" style="background-color: rgb(255, 217, 0);"></td>
            <td style="background-color: rgb(255, 217, 0);">1</td>
            <td id="username1L" style="background-color: rgb(255, 217, 0);"></td>
            <td id="score1L" style="background-color: rgb(255, 217, 0);"></td>
        </tr>
        <tr>
            <td style="background-color: rgb(192, 192, 192);">2</td>
            <td id="username2A" style="background-color: rgb(192, 192, 192);"></td>
            <td id="score2A" style="background-color: rgb(192, 192, 192);"></td>
            <td style="background-color: rgb(192, 192, 192);">2</td>
            <td id="username2L" style="background-color: rgb(192, 192, 192);"></td>
            <td id="score2L" style="background-color: rgb(192, 192, 192);"></td>
        </tr>
        <tr>
            <td style="background-color: rgb(233, 146, 66);">3</td>
            <td id="username3A" style="background-color: rgb(233, 146, 66);"></td>
            <td id="score3A" style="background-color: rgb(233, 146, 66);"></td>
            <td style="background-color: rgb(233, 146, 66);">3</td>
            <td id="username3L" style="background-color: rgb(233, 146, 66);"></td>
            <td id="score3L" style="background-color: rgb(233, 146, 66);"></td>
        </tr>
        <tr>
            <td>4</td>
            <td id="username4A"></td>
            <td id="score4A"></td>
            <td>4</td>
            <td id="username4L"></td>
            <td id="score4L"></td>
        </tr>
        <tr>
            <td>5</td>
            <td id="username5A"></td>
            <td id="score5A"></td>
            <td>5</td>
            <td id="username5L"></td>
            <td id="score5L"></td>
        </tr>
        <tr>
            <td>6</td>
            <td id="username6A"></td>
            <td id="score6A"></td>
            <td>6</td>
            <td id="username6L"></td>
            <td id="score6L"></td>
        </tr>
    </table>
</center>
<br><br><br><br><br><br>
<br><br><br><br><br><br>
<!--Linking to JS file to fill leaderboard with user scores-->
<script src="leaderboard.js?v=<?php echo time(); ?>">
</script>
<!--Setting up background music-->
<embed src="Playlist4.mp3" autostart="true" loop="true" height="0" width="0">
<!--Setting up footer. PHP was not used for this to use the font-awesome icons. Placeholder links are added for hyperlinks as social media accounts for CardFlip do not exist-->
<div class="footer">
    <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
    <a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
    <a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>
    <a href="https://www.gmail.com"><i class="fa-solid fa-envelope"></i></a>
</div>