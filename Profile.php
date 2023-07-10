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
            <a href="Profile.html"><i class="fa-solid fa-user"></i> &nbsp;&nbsp;My Profile</a>
            <a class = "logout" href="CardFlipGuest.php" onclick = "logout()"><i class="fa-solid fa-right-from-bracket"></i>&nbsp;&nbsp;Logout</a>
        </div>

        <?php
        include('common.php');
        myheader("CardFlip-Profile");
        bannerNavigation("Profile");
       ?>
            <br><br><br><br><br>
            <div id ="profile">
                <b><p style = "font-size: 30px;"><i class="fa-solid fa-user"></i>&nbsp;USER PROFILE</p></b>
                <br><br>
                Username:&nbsp;&nbsp;&nbsp;<input id = "username" style="background-color: rgba(66, 66, 66, 0.76); color: white; text-align: center;" type="text" disabled = "true">
                <br><br>
                Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id = "gender" style="background-color: rgba(66, 66, 66, 0.76); color: white; text-align: center;" type="text"  disabled = "true">
                <br><br>
                Nationality:&nbsp;<input id = "nationality" style="background-color: rgba(66, 66, 66, 0.76); color: white; text-align: center;" type="text" disabled = "true">
                <br><br>
                Email ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id = "email" input style="background-color: rgba(66, 66, 66, 0.76); color: white; text-align: center;" type="text"  disabled = "true">
                <br><br>
                DOB:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id = "dob" input style="background-color: rgba(66, 66, 66, 0.76); color: white; text-align: center;" type="text"  disabled = "true">
                <br><br>
                Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id = "phone" input style="background-color: rgba(66, 66, 66, 0.76); color: white; text-align: center;" type="text"  disabled = "true">
                <br>
            </div>
            <script>

            //userInfo = JSON.stringify(localStorage.getItem(key));
            //let userName = document.getElementById("username").value;
            //let userGender = document.getElementById("gender").value;
            //let userNation = document.getElementById("nationality").value;
            //let userMail = document.getElementById("email").value;
            //let userDob = document.getElementById("dob").value;
            //let userPhone = document.getElementById("phone").value;

            document.getElementById("username").value = sessionStorage.loggedInUsrName;
            document.getElementById("gender").value = sessionStorage.loggedInGender;
            document.getElementById("nationality").value = sessionStorage.loggedInNation;
            document.getElementById("email").value = sessionStorage.loggedInEmail;
            document.getElementById("dob").value = sessionStorage.loggedInDob;
            document.getElementById("phone").value = sessionStorage.loggedInPhone;
    

            //const userGender = JSON.parse(localStorage.getItem(gender));
            //const userNation = JSON.parse(localStorage.getItem(nationality));
            //const userMail = JSON.parse(localStorage.getItem(email));
            //const userDob = JSON.parse(localStorage.getItem(dob));
            


            //for(i = 0; i < infoBox.length; i++){
             //   infoBox[i] = userObject[i];
            //}

            //let gender = sessionStorage.getItem("gender")
            //document.getElementById("username").value
            //document.getElementById("gender").value
            //document.getElementById("nationality").value = ;
            </script>
            <br><br><br><br>
            <br><br><br><br>
            <br><br>
            <embed src="Playlist1.mp3" autostart = "true" loop = "true" height="0" width="0">
        <div class = "footer">
            <a href = "#instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href = "#twitter"><i class="fa-brands fa-twitter"></i></a>
            <a href = "#whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
            <a href = "#mail"><i class="fa-solid fa-envelope"></i></a>
        </div>