//clickCount variables are used for indicating card face, 0 being the back end, 1 being the image end
var clickCount1 = 0;
var clickCount2 = 0;
var clickCount3 = 0;
var clickCount4 = 0;
var clickCount5 = 0;
var clickCount6 = 0;
var clickCount7 = 0;
var clickCount8 = 0;
var clickCount9 = 0;
var clickCount10 = 0;
//a variable called gameScore introduced to record the score
var gameScore = 0;

function Flip1(){
  //replace font awesome icon with image tag
  document.getElementById("AmateurCard1").innerHTML = "";
  document.getElementById("AmateurCard1").innerHTML = "<img src=\"gryffindor.jpg\" width=\"95px\" height=\"95px\" style = \"margin-top: -5%; margin-left: -10.5%;\">";
  //add 1 to clickCount
  clickCount1++;
  console.log(clickCount1);
  //change to 1 if clickcount value is higher than 1
  if(clickCount1 > 1 && clickCount3 < 1){
    clickCount1 = 1;}
  console.log(clickCount1);

  //describing relation of card 1 with the other cards, and how the game should behave for each scenario

  //Getting different cards
  if(clickCount2 === 1 && clickCount9 < 1){
    //remove image and add font awesome icon
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
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
    clickCount2 = 2;
    //increase score
    gameScore = gameScore + 10;
    //disable both buttons
    document.getElementById("AmateurCard1").disabled = true;
    document.getElementById("AmateurCard3").disabled = true;
    //update score
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount1);
    if(clickCount1 > 2){
      clickCount1 = 2;}  

     //The same method shown above is followed for every other card that have same image 
  }
  if(clickCount4 === 1 && clickCount7 < 1){
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount5 === 1 && clickCount6 < 1){
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount5 < 1){
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount4 < 1){
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount10 < 1){
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount2 < 1){
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount8 < 1){
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
}

function Flip2(){
document.getElementById("AmateurCard2").innerHTML = "";
document.getElementById("AmateurCard2").innerHTML = "<img src=\"slytherin.jpg\" width=\"95px\" height=\"95px\" style = \"margin-top: -5%; margin-left: -10.5%;\">";
clickCount2++;
  console.log(clickCount2);
  document.getElementById("score").innerHTML = "Score: " + gameScore;
  if(clickCount2 > 1 && clickCount9 < 1){
    clickCount2 = 1;}
  console.log(clickCount2);
  if(clickCount1 === 1 && clickCount3 < 1){
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;    
  }
  if(clickCount9 === 1){
    clickCount2 = 2;
    clickCount9 = 2;
    gameScore = gameScore + 10;
    document.getElementById("AmateurCard2").disabled = true;
    document.getElementById("AmateurCard9").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount2);
    if(clickCount2 > 2){
      clickCount2 = 2;
      console.log(clickCount2);}  
  }
  if(clickCount3 === 1 && clickCount1 < 1){
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore; 
  }
  if(clickCount4 === 1 && clickCount7 < 1){
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount5 === 1 && clickCount6 < 1){
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount6 === 1 && clickCount5 < 1){
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount4 < 1){
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount10 < 1){
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount8 < 1){
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
}

function Flip3(){
document.getElementById("AmateurCard3").innerHTML = "";
document.getElementById("AmateurCard3").innerHTML = "<img src=\"gryffindor.jpg\" width=\"95px\" height=\"95px\" style = \"margin-top: -5%; margin-left: -10.5;\">";
clickCount3++;
  console.log(clickCount3);
  document.getElementById("score").innerHTML = "Score: " + gameScore;
  if(clickCount3 > 1 && clickCount1 < 1){
    clickCount3 = 1;}
  console.log(clickCount3);
  if(clickCount2 === 1 && clickCount9 < 1){
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount1 === 1){
    clickCount1 = 2;
    clickCount3 = 2;
    gameScore = gameScore + 10;
    document.getElementById("AmateurCard1").disabled = true;
    document.getElementById("AmateurCard3").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount3);
    if(clickCount3 > 2){
      clickCount3 = 2;
      console.log(clickCount3);}  
  }
  if(clickCount4 === 1 && clickCount7 < 1){
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount5 === 1 && clickCount6 < 1){
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount5 < 1){
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount4 < 1){
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount10 < 1){
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount2 < 1){
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount8 < 1){
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
}

function Flip4(){
document.getElementById("AmateurCard4").innerHTML = "";
document.getElementById("AmateurCard4").innerHTML = "<img src=\"hufflepuff.jpg\" width=\"95px\" height=\"95px\" style = \"margin-top: -5%; margin-left: -10.5%;\">";
clickCount4++;
  console.log(clickCount4);
  document.getElementById("score").innerHTML = "Score: " + gameScore;
  if(clickCount4 > 1 && clickCount7 < 1){
    clickCount4 = 1;}
  console.log(clickCount4);
  if(clickCount1 === 1 && clickCount3 < 1){
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1){
    clickCount7 = 2;
    clickCount4 = 2;
    gameScore = gameScore + 10;
    document.getElementById("AmateurCard7").disabled = true;
    document.getElementById("AmateurCard4").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount3);
    if(clickCount4 > 2){
      clickCount4 = 2;
      console.log(clickCount4);}  
  }
  if(clickCount2 === 1 && clickCount9 < 1){
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1 && clickCount1 < 1){
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount5 === 1 && clickCount6 < 1){
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount6 === 1 && clickCount5 < 1){
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount10 < 1){
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount2 < 1){
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount8 < 1){
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
}

function Flip5(){
  document.getElementById("AmateurCard5").innerHTML = "";
  document.getElementById("AmateurCard5").innerHTML = "<img src=\"ravenclaw.jpg\" width=\"95px\" height=\"95px\" style = \"margin-top: -5%; margin-left: -10.5%;\">";
  clickCount5++;
  console.log(clickCount5);
  document.getElementById("score").innerHTML = "Score: " + gameScore;
  if(clickCount5 > 1 && clickCount6 < 1){
    clickCount4 = 1;}
  console.log(clickCount3);
  if(clickCount1 === 1 && clickCount3 < 1){
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount6 === 1){
    clickCount6 = 2;
    clickCount5 = 2;
    gameScore = gameScore + 10;
    document.getElementById("AmateurCard6").disabled = true;
    document.getElementById("AmateurCard5").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount3);
    if(clickCount5 > 2){
      clickCount5 = 2;
      console.log(clickCount5);}  
  }
  if(clickCount2 === 1 && clickCount9 < 1){
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1 && clickCount1 < 1){
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount4 === 1 && clickCount7 < 1){
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount4 < 1){
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount10 < 1){
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount2 < 1){
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount8 < 1){
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
}

function Flip6(){
  document.getElementById("AmateurCard6").innerHTML = "";
  document.getElementById("AmateurCard6").innerHTML = "<img src=\"ravenclaw.jpg\" width=\"95px\" height=\"95px\" style = \"margin-top: -5%; margin-left: -10.5%;\">";
  clickCount6++;
  console.log(clickCount6);
  document.getElementById("score").innerHTML = "Score: " + gameScore;
  if(clickCount6 > 1 && clickCount5 < 1){
    clickCount6 = 1;}
  console.log(clickCount3);
  if(clickCount1 === 1 && clickCount3 < 1){
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount5 === 1){
    clickCount6 = 2;
    clickCount5 = 2;
    gameScore = gameScore + 10;
    document.getElementById("AmateurCard6").disabled = true;
    document.getElementById("AmateurCard5").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount3);
    if(clickCount6 > 2){
      clickCount6 = 2;
      console.log(clickCount6);}  
  }
  if(clickCount2 === 1 && clickCount9 < 1){
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1 && clickCount1 < 1){
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount4 === 1 && clickCount7 < 1){
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount4 < 1){
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount10 < 1){
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount2 < 1){
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount8 < 1){
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
}

function Flip7(){
  document.getElementById("AmateurCard7").innerHTML = "";
  document.getElementById("AmateurCard7").innerHTML = "<img src=\"hufflepuff.jpg\" width=\"95px\" height=\"95px\" style = \"margin-top: -5%; margin-left: -10.5%;\">";
  clickCount7++;
  console.log(clickCount7);
  document.getElementById("score").innerHTML = "Score: " + gameScore;
  if(clickCount7 > 1 && clickCount4 < 1){
    clickCount7 = 1;}
  console.log(clickCount7);
  if(clickCount1 === 1 && clickCount3 < 1){
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount4 === 1){
    clickCount7 = 2;
    clickCount4 = 2;
    gameScore = gameScore + 10;
    document.getElementById("AmateurCard7").disabled = true;
    document.getElementById("AmateurCard4").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount3);
    if(clickCount7 > 2){
      clickCount7 = 2;
      console.log(clickCount7);}  
  }
  if(clickCount2 === 1 && clickCount9 < 1){
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1 && clickCount1 < 1){
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount5 === 1 && clickCount6 < 1){
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount6 === 1 && clickCount5 < 1){
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount10 < 1){
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount2 < 1){
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount8 < 1){
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
}

function Flip8(){
  document.getElementById("AmateurCard8").innerHTML = "";
  document.getElementById("AmateurCard8").innerHTML = "<img src=\"hogwarts.jpg\" width=\"95px\" height=\"95px\" style = \"margin-top: -5%; margin-left: -10.5%;\">";
  clickCount8++;
  console.log(clickCount8);
  document.getElementById("score").innerHTML = "Score: " + gameScore;
  if(clickCount8 > 1 && clickCount10 < 1){
    clickCount8 = 1;}
  console.log(clickCount8);
  if(clickCount1 === 1 && clickCount3 < 1){
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1){
    clickCount10 = 2;
    clickCount8 = 2;
    gameScore = gameScore + 10;
    document.getElementById("AmateurCard8").disabled = true;
    document.getElementById("AmateurCard10").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount3);
    if(clickCount8 > 2){
      clickCount8 = 2;
      console.log(clickCount8);}  
  }
  if(clickCount2 === 1 && clickCount9 < 1){
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1 && clickCount1 < 1){
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount4 === 1 && clickCount7 < 1){
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount5 === 1 && clickCount6 < 1){
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount6 === 1 && clickCount5 < 1){
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount4 < 1){
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount2 < 1){
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }  
}

function Flip9(){
  document.getElementById("AmateurCard9").innerHTML = "";
  document.getElementById("AmateurCard9").innerHTML = "<img src=\"slytherin.jpg\" width=\"95px\" height=\"95px\" style = \"margin-top: -5%; margin-left: -10.5%;\">";
  clickCount9++;
  console.log(clickCount9);
  document.getElementById("score").innerHTML = "Score: " + gameScore;
  if(clickCount9 > 1 && clickCount2 < 1){
    clickCount9 = 1;}
  console.log(clickCount9);
  if(clickCount1 === 1 && clickCount3 < 1){
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount2 === 1){
    clickCount2 = 2;
    clickCount9 = 2;
    gameScore = gameScore + 10;
    document.getElementById("AmateurCard2").disabled = true;
    document.getElementById("AmateurCard9").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount9);
    if(clickCount9 > 2){
      clickCount9 = 2;
      console.log(clickCount9);}  
  }
  if(clickCount3 === 1 && clickCount1 < 1){
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount4 === 1 && clickCount7 < 1){
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount5 === 1 && clickCount6 < 1){
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount6 === 1 && clickCount5 < 1){
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount4 < 1){
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount10 < 1){
    document.getElementById("AmateurCard8").innerHTML = "";
    document.getElementById("AmateurCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount8 < 1){
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
}

function Flip10(){
  document.getElementById("AmateurCard10").innerHTML = "";
  document.getElementById("AmateurCard10").innerHTML = "<img src=\"hogwarts.jpg\" width=\"95px\" height=\"95px\" style = \"margin-top: -5%; margin-left: -10.5%;\">";
  clickCount10++;
  console.log(clickCount10);
  document.getElementById("score").innerHTML = "Score: " + gameScore;
  if(clickCount10 > 1 && clickCount8 < 1){
    clickCount10 = 1;}
  console.log(clickCount8);
  if(clickCount1 === 1 && clickCount3 < 1){
    document.getElementById("AmateurCard1").innerHTML = "";
    document.getElementById("AmateurCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1){
    clickCount10 = 2;
    clickCount8 = 2;
    gameScore = gameScore + 10;
    document.getElementById("AmateurCard8").disabled = true;
    document.getElementById("AmateurCard10").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount10);
    if(clickCount10 > 2){
      clickCount10 = 2;
      console.log(clickCount10);}  
  }
  if(clickCount2 === 1 && clickCount9 < 1){
    document.getElementById("AmateurCard2").innerHTML = "";
    document.getElementById("AmateurCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1 && clickCount1 < 1){
    document.getElementById("AmateurCard3").innerHTML = "";
    document.getElementById("AmateurCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount4 === 1 && clickCount7 < 1){
    document.getElementById("AmateurCard4").innerHTML = "";
    document.getElementById("AmateurCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount5 === 1 && clickCount6 < 1){
    document.getElementById("AmateurCard5").innerHTML = "";
    document.getElementById("AmateurCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount6 === 1 && clickCount5 < 1){
    document.getElementById("AmateurCard6").innerHTML = "";
    document.getElementById("AmateurCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount4 < 1){
    document.getElementById("AmateurCard7").innerHTML = "";
    document.getElementById("AmateurCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount2 < 1){
    document.getElementById("AmateurCard9").innerHTML = "";
    document.getElementById("AmateurCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("AmateurCard10").innerHTML = "";
    document.getElementById("AmateurCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
}
  

