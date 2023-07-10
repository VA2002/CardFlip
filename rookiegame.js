//clickCount variables are used for indicating card face, 0 being the back end, 1 being the image end
var clickCount1 = 0;
var clickCount2 = 0;
var clickCount3 = 0;
var clickCount4 = 0;
//a variable called gameScore introduced to record score
var gameScore = 0;

//Flip1 to Flip 4 describe the relation of each card with other cards on that page, along with scoring mechanism for each of these relations
//(for example, Flip1 Function describes the functioning of the 1st card. Flip2 does the same for 2nd card, and so on
//Mismatches deduct 5 points, while pairs give 10 points

//Before click, card value is 0, but on clicking it becomes 1. When a pair is obtained, the value is changed to 2 for both cards
//To obtain the image end of a card, DOM is used to replace the font-awesome icon with the image. On recieving a pair, the concerned buttons are disabled to prevent game malfunctioning

function Flip1(){
  //replace font awesome icon with image tag
  document.getElementById("RookieCard1").innerHTML = "";
  document.getElementById("RookieCard1").innerHTML = "<img src=\"hp.jpg\" width=\"140px\" height=\"140px\" style = \"margin-top: -4%; margin-left: -5%;\">"; 
  //add 1 to clickCount
  clickCount1++;
  console.log(clickCount1);
  //view score
  document.getElementById("score").innerHTML = "Score: " + gameScore; 
    //change to 1 if clickcount value is higher than 1
    if(clickCount1 > 1){
      clickCount1 = 1;}
    console.log(clickCount1);

    //describing relation of card 1 with the other cards, and how the game should behave for each scenario
    
    //Getting different cards
    if(clickCount2 === 1 && clickCount4 < 1){
      //remove image and add font awesome icon
      document.getElementById("RookieCard2").innerHTML = "";
      document.getElementById("RookieCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
      document.getElementById("RookieCard1").innerHTML = "";
      document.getElementById("RookieCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
      //reset clickCounts to 0
      clickCount1 = 0;
      clickCount2 = 0;
      //reduce score
      gameScore = gameScore - 5;
      //show updated score
      document.getElementById("score").innerHTML = "Score: " + gameScore;  
    
      //The same method shown above is followed for every other card with image different than that of this card
    }
    //Getting the same card
    if(clickCount3 === 1){
      //Set both clickCounts to 2
      clickCount1 = 2;
      clickCount3 = 2;
      //disable both buttons
      document.getElementById("RookieCard1").disabled = true;
      document.getElementById("RookieCard3").disabled = true;
      //increase score
      gameScore = gameScore + 10;
      //update score
      document.getElementById("score").innerHTML = "Score: " + gameScore;
      if(clickCount1 > 2){
        clickCount1 = 2;}    

        //The same method shown above is followed for every other card that have same image
    }
    if(clickCount4 === 1 && clickCount2 < 1){
      document.getElementById("RookieCard4").innerHTML = "";
      document.getElementById("RookieCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
      document.getElementById("RookieCard1").innerHTML = "";
      document.getElementById("RookieCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
      clickCount1 = 0;
      clickCount4 = 0;
      gameScore = gameScore - 5;
      document.getElementById("score").innerHTML = "Score: " + gameScore;  
    }
  }
    
  

function Flip2(){
  document.getElementById("RookieCard2").innerHTML = "";
  document.getElementById("RookieCard2").innerHTML = "<img src=\"scar.jpg\" width=\"140px\" height=\"140px\" style = \"margin-top: -4%; margin-left: -5%;\">";
  clickCount2++;
  console.log(clickCount2);
  document.getElementById("score").innerHTML = "Score: " + gameScore;
  if(clickCount2 > 1){
    clickCount2 = 1;}

  if(clickCount1 === 1 && clickCount3 < 1){
    document.getElementById("RookieCard2").innerHTML = "";
    document.getElementById("RookieCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("RookieCard1").innerHTML = "";
    document.getElementById("RookieCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount4 === 1){
    document.getElementById("RookieCard2").disabled = true;
    document.getElementById("RookieCard4").disabled = true;
    clickCount4 = 2;
    clickCount2 = 2;
    gameScore = gameScore + 10;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
    if(clickCount2 > 2){
      clickCount2 = 2;}
  }
  if(clickCount3 === 1 && clickCount1 < 1){
    document.getElementById("RookieCard3").innerHTML = "";
    document.getElementById("RookieCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("RookieCard2").innerHTML = "";
    document.getElementById("RookieCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
}

function Flip3(){
  document.getElementById("RookieCard3").innerHTML = "";
  document.getElementById("RookieCard3").innerHTML = "<img src=\"hp.jpg\" width=\"140px\" height=\"140px\" style = \"margin-top: -3%; margin-left: -5.5%;\">";
  clickCount3++;
  console.log(clickCount3);
  document.getElementById("score").innerHTML = "Score: " + gameScore;
  if(clickCount3 > 1){
    clickCount3 = 1;}

  if(clickCount2 === 1 && clickCount4 < 1){
    document.getElementById("RookieCard3").innerHTML = "";
    document.getElementById("RookieCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("RookieCard2").innerHTML = "";
    document.getElementById("RookieCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount1 === 1){
    document.getElementById("RookieCard1").disabled = true;
    document.getElementById("RookieCard3").disabled = true;
    clickCount1 = 2;
    clickCount3 = 2;
    gameScore = gameScore + 10;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    if(clickCount3 > 2){
      clickCount3 = 2;}  
  }
  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("RookieCard4").innerHTML = "";
    document.getElementById("RookieCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("RookieCard3").innerHTML = "";
    document.getElementById("RookieCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
}

function Flip4(){
  document.getElementById("RookieCard4").innerHTML = "";
  document.getElementById("RookieCard4").innerHTML = "<img src=\"scar.jpg\" width=\"140px\" height=\"140px\" style = \"margin-top: -3%; margin-left: -5.5%;\">";
  clickCount4++;
  console.log(clickCount4);
  document.getElementById("score").innerHTML = "Score: " + gameScore;
  if(clickCount4 > 1){
    clickCount4 = 1;}

  if(clickCount1 === 1 && clickCount3 < 1){
    document.getElementById("RookieCard1").innerHTML = "";
    document.getElementById("RookieCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("RookieCard4").innerHTML = "";
    document.getElementById("RookieCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount2 === 1){
    document.getElementById("RookieCard2").disabled = true;
    document.getElementById("RookieCard4").disabled = true;
    clickCount4 = 2;
    clickCount2 = 2;
    gameScore = gameScore + 10;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
    if(clickCount4 > 2){
      clickCount4 = 2;}
  }
  if(clickCount3 === 1 && clickCount1 < 1){
    document.getElementById("RookieCard4").innerHTML = "";
    document.getElementById("RookieCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("RookieCard3").innerHTML = "";
    document.getElementById("RookieCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
}









