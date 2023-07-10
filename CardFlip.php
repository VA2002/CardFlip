<!--Home page after logging in-->
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
    <a class="logout" href="CardFlipGuest.php" onclick="logout()">
        <i class="fa-solid fa-right-from-bracket"></i>
        &nbsp;&nbsp;Logout
    </a>
</div>
<!--Using php to put navigation bar-->
<?php
    include('common.php');
    myheader("CardFlip-Home");
    bannerNavigation("<i class=\"fa-solid fa-house\"></i>&nbsp;Home");
?>
<br>
<!--Setting up p to provide a hyperlink at the bottom such that it directs user back to top of the page-->
<p id="top" class="Style"></p>
<p id="movetotop"></p>
<br><br><br><br><br>
<!--Text for website-->
<center>
    <h4 id="hiuser"></h4>
    <h1>Welcome to Card Flip!</h1>
</center>
<script>
document.getElementById("hiuser").innerHTML = "Hi " + sessionStorage.loggedInUsrName + "!";
</script>
<br><br><br><br><br>
<br><br><br><br><br>
<!--Text for website with some inline styling and image addition-->
<center>
    <p style="font-family: Arial, Helvetica, sans-serif; font-size: 20px; color: whitesmoke;">
        <b>_____________________________________________________________________________________________________________________</b>
    </p>
    <p
        style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-size: 45px; text-align: center; color: white;">
        About the Developer
    </p>
    <br>
    <p style="font-family: Arial, Helvetica, sans-serif; font-size: 20px; color: white;">
        <br><br><br>
        <b>Name:</b>&nbsp;Vishesh Arora
        <br><br>
        <b>Nationality:</b>&nbsp;Indian
        <br><br>
        <b>Profession:</b>&nbsp;University Student</p>
</center>
<br><br><br><br><br><br><br><br>
<!--Text for website with some inline styling-->
<center
    style="background-color: #FFFFFF; color: black; font-size: 26px; font-family: Verdana; margin-left: -5%; width: 107%">
    <p
        style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; font-size: 45px; background-color: #FFFFFF; color: black;">
        <br>&nbsp;&nbsp;About Card Flip
    </p>
    CardFlip is a Memory Card Game where you can test your memory and guessing skills. <br>Get the right pair, you get
    points! <br>Get different cards, you lose points!
    <br>
    Compete with other players and score higher than them to get to the top!<br><br>
    <br><br>
</center>
<br><br>

<center>
    <br><br><br><br><br><br>
    <!--Slider added to show game screenshots-->
    <!--Credit to W3Schools for tutorial-->
    <div class="slider">

        <!-- Images with number and caption text -->
        <div class="slides">
            <div class="numbertext">Screenshot 1 of 5</div>
            <img src="Screenshot1.jpg" width="600" height="460"
                style="width:80%; border-color: black; border-style: groove; border-width: 2px;">
            <div class="text"> </div>
        </div>

        <div class="slides">
            <div class="numbertext">Screenshot 2 of 5</div>
            <img src="Screenshot2.jpg" width="600" height="460"
                style="width:80%; border-color: black; border-style: groove; border-width: 2px;">
            <div class="text"> </div>
        </div>

        <div class="slides">
            <div class="numbertext">Screenshot 3 of 5</div>
            <img src="Screenshot3.jpg" width="600" height="460"
                style="width:80%; border-color: black; border-style: groove; border-width: 2px;">
            <div class="text"> </div>
        </div>

        <div class="slides">
            <div class="numbertext">Screenshot 4 of 5</div>
            <img src="Screenshot4.jpg" width="600" height="460"
                style="width:80%; border-color: black; border-style: groove; border-width: 2px;">
            <div class="text"> </div>
        </div>

        <div class="slides">
            <div class="numbertext">Screenshot 5 of 5</div>
            <img src="Screenshot5.jpg" width="600" height="460"
                style="width:80%; border-color: black; border-style: groove; border-width: 2px;">
            <div class="text"> </div>
        </div>


        <!-- Next and previous buttons -->
        <a class="prev" onclick="slidePlus(-1)">&#10094;</a>
        <a class="next" onclick="slidePlus(1)">&#10095;</a>
    </div><br>
    <!-- The dots/circles -->
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        <span class="dot" onclick="currentSlide(4)"></span>
        <span class="dot" onclick="currentSlide(5)"></span>
    </div>

</center>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<!--Hyperlink to move to top of the page-->
<p style="font-size: 50px ;color: white; text-align: right;">
    <a href="#movetotop">
        <i class="fa-solid fa-circle-up"></i>
    </a>
</p>
<!-- Slideshow container javascript coding -->
<script>
let slideIndex = 1;
showSlides(slideIndex);

function slidePlus(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
</script>
<!--Setting up background music-->
<embed src="Playlist1.mp3" autostart="true" loop="true" height="0" width="0">
<br><br>
<!--Setting up footer. PHP was not used for this to use the font-awesome icons. Placeholder links are added for hyperlinks as social media accounts for CardFlip do not exist-->
<div class="footer">
    <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
    <a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
    <a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>
    <a href="https://www.gmail.com"><i class="fa-solid fa-envelope"></i></a>
    <br>
</div>