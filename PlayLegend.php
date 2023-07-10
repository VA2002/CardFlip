<!--Legend tier page after logging in-->
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
    myheader("CardFlip-Play");
    bannerNavigation("<i class=\"fa-solid fa-play\"></i>&nbsp;Play");
?>
<br><br><br><br><br>
<!--Using center tag to allign content within it in center. Added some content and a temporarily placeholder image for game-->
<!--There are IDs and classes assigned within center tag to allign these parts in the desired fashion using CSS-->
<!--It should be noted that the game will not look exactly like the one in the image-->
<center>
    <div id="gametext">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p class="gamemode">
            <b>LEGEND</b>
        </p>
        <div id="gamepic">
            <br><br><br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <!--Introducing the game div and the cards. Onclick functions also assigned to each card.-->
            <div class="Game">
                <p id="Card1">
                    <button id="LegendCard1" onclick="Flip1()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card2">
                    <button id="LegendCard2" onclick="Flip2()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <br>
                <p id="Card3">
                    <button id="LegendCard3" onclick="Flip3()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card4">
                    <button id="LegendCard4" onclick="Flip4()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card5">
                    <button id="LegendCard5" onclick="Flip5()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card6">
                    <button id="LegendCard6" onclick="Flip6()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card7">
                    <button id="LegendCard7" onclick="Flip7()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card8">
                    <button id="LegendCard8" onclick="Flip8()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card9">
                    <button id="LegendCard9" onclick="Flip9()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card10">
                    <button id="LegendCard10" onclick="Flip10()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card11">
                    <button id="LegendCard11" onclick="Flip11()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card12">
                    <button id="LegendCard12" onclick="Flip12()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card13">
                    <button id="LegendCard13" onclick="Flip13()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card14">
                    <button id="LegendCard14" onclick="Flip14()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card15">
                    <button id="LegendCard15" onclick="Flip15()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
                <p id="Card16">
                    <button id="LegendCard16" onclick="Flip16()">
                        <i class="fa-sharp fa-solid fa-brain"></i>
                    </button>
                </p>
            </div>
            <!--Linking the game JS to this page. PHP part added so that the webpage responds to the changes in the JS file-->
            <script src="legendgame.js?v=<?php echo time(); ?>">
            </script>
            <br>
        </div>
        <br>
        <!--Shows user score-->

        <p class="scoretime">
            <br>
            <b id="score"><b>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <br>
        </p>
    </div>
</center>
<br><br><br><br><br><br><br><br><br>
<!--Setting up background music-->
<embed src="chill.mp3" autostart="true" loop="true" height="0" width="0">
<!--Setting up footer. PHP was not used for this to use the font-awesome icons. Placeholder links are added for hyperlinks as social media accounts for CardFlip do not exist-->
<div class="footer">
    <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
    <a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
    <a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>
    <a href="https://www.gmail.com"><i class="fa-solid fa-envelope"></i></a>
</div>