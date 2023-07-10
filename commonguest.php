<?php

//Ouputs the header for the page and opening body tag. Also includes linking with CSS file, JS file, font-awsome li
function myheader($title){
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">';
    echo '<link rel="stylesheet" type="text/css" href="Cardflipphpcss.css?v=<?php echo time(); ?>">';
    echo '<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">';
    echo '<script src="//code.jquery.com/jquery-1.11.3.js"></script>';
    echo '<script src="//code.jquery.com/ui/1.12.0-rc.1/jquery-ui.js"></script>';
    echo '</head>';
    echo '<body>';
}

/* Ouputs the banner and the navigation bar
    The selected class is applied to the page that matches the page name variable */
function bannerNavigation($pageName){
    //Output banner and first part of navigation
    echo '<br><div class="navigation"><img id = "logo" src = "Cardflip.jpg" height="87" width="282">';
    
    //Array set up to make a navigation bar and provide it hyperlinks
    
    $linkNames = array("<i class=\"fa-solid fa-crown\"></i>&nbsp;Leaderboard", "<i class=\"fa-solid fa-circle-info\"></i>&nbsp;Instructions", "<i class=\"fa-solid fa-play\"></i>&nbsp;Play", "<i class=\"fa-solid fa-house\"></i>&nbsp;Home");
    $linkAddresses = array("LeaderboardGuest.php", "InstructionsGuest.php", "PlayGuest.php", "CardFlipGuest.php");

    //Starting a for loop for connected linkNames array to linkAddresses array
    for($x = 0; $x < count($linkNames); $x++){
        
        echo '<a ';
        
        if($linkNames[$x] == $pageName){
            echo 'class="onpage" ';
        }
        
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>';
    }
    echo '</div>';
    echo '</div>';
}

//Outputs closing body tag and closing HTML tag
function footer(){
    //Do the nav stuff for js here
    echo '</body>';
    echo '</html>';
}
?>