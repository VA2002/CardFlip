<!--Instructions page after logging in-->
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
    myheader("CardFlip-Instructions");
    bannerNavigation("<i class=\"fa-solid fa-circle-info\"></i>&nbsp;Instructions");
?>
<br><br><br><br>
<br><br><br><br>
<center>
    <!--Slider for instructions-->
    <div class="slider">

        <!-- Images with number and caption text -->
        <div class="slides">
            <div class="numbertext">Instruction 1 of 4</div>
            <img src="Instruction1.jpg" width="690" height="420"
                style="width:85%; border-color: black; border-style: groove; border-width: 2px;">
            <div class="text"> </div>
        </div>

        <div class="slides">
            <div class="numbertext">Instruction 2 of 4</div>
            <img src="Instruction2.jpg" width="690" height="420"
                style="width:85%; border-color: black; border-style: groove; border-width: 2px;">
            <div class="text"> </div>
        </div>

        <div class="slides">
            <div class="numbertext">Instruction 3 of 4</div>
            <img src="Instruction3.jpg" width="690" height="420"
                style="width:85%; border-color: black; border-style: groove; border-width: 2px;">
            <div class="text"> </div>
        </div>

        <div class="slides">
            <div class="numbertext">Instruction 4 of 4</div>
            <img src="Instruction4.jpg" width="720" height="420"
                style="width:85%; border-color: black; border-style: groove; border-width: 2px;">
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
    </div>

</center>
<!-- Slider JS Code -->
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
<br><br><br><br>
<br><br><br><br>
<!--Setting up background music-->
<embed src="Playlist3.mp3" autostart="true" loop="true" height="0" width="0">
<!--Setting up footer. PHP was not used for this to use the font-awesome icons. Placeholder links are added for hyperlinks as social media accounts for CardFlip do not exist-->
<div class="footer">
    <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
    <a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
    <a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>
    <a href="https://www.gmail.com"><i class="fa-solid fa-envelope"></i></a>
</div>