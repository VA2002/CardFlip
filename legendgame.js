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
var clickCount11 = 0;
var clickCount12 = 0;
var clickCount13 = 0;
var clickCount14 = 0;
var clickCount15 = 0;
var clickCount16 = 0;
//a variable called gameScore equated with the legend tier score in session storage (converted to number)
let gameScore = Number(sessionStorage.legend);

//when game ends
function gameOver(){
  if(clickCount1 > 0 && clickCount2 > 0 && clickCount3 > 0 && clickCount4 > 0 && clickCount5 > 0 && clickCount6 > 0 && clickCount7 > 0 && clickCount8 > 0 && clickCount9 > 0 && clickCount10 > 0 && clickCount11 > 0 && clickCount12 > 0 && clickCount13 > 0 && clickCount14 > 0 && clickCount15 > 0 && clickCount16 > 0){
    //alert message displayed
    alert ("Game Over");
    //updating legendscore in localstorage
    let finalScore = JSON.stringify(gameScore);
    sessionStorage.legend = JSON.parse(finalScore);
    document.getElementById("score").innerHTML = "Final Score: " + sessionStorage.legend;
    loggedinuser=sessionStorage.loggedInUsrName;
    user= JSON.parse(localStorage.getItem(loggedinuser));
    user.legendscore=gameScore;
    localStorage.setItem (loggedinuser, JSON.stringify(user) );
  }
  else{
    return; //do nothing
  }
}

//Flip1 to Flip 16 describe the relation of each card with other cards on that page, along with scoring mechanism for each of these relations
//(for example, Flip1 Function describes the functioning of the 1st card. Flip2 does the same for 2nd card, and so on
//Mismatches deduct 5 points, while pairs give 10 points

//Before click, card value is 0, but on clicking it becomes 1. When a pair is obtained, the value is changed to 2 for both cards
//To obtain the image end of a card, DOM is used to replace the font-awesome icon with the image. On recieving a pair, the concerned buttons are disabled to prevent game malfunctioning

function Flip1(){
  //replace font awesome icon with image tag
  document.getElementById("LegendCard1").innerHTML = "";
  document.getElementById("LegendCard1").innerHTML = "<img src=\"nagini.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  //add 1 to clickCount
  clickCount1++;
  console.log(clickCount1);
  //change to 1 if clickcount value is higher than 1
  if(clickCount1 > 1 && clickCount4 < 1){
    clickCount1 = 1;}
  console.log(clickCount1);

  //describing relation of card 1 with the other cards, and how the game should behave for each scenario

  //Getting different cards
  if(clickCount2 === 1 && clickCount10 < 1){
    //remove image and add font awesome icon
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
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
  if(clickCount4 === 1){
    //Set both clickCounts to 2
    clickCount1 = 2;
    clickCount4 = 2;
    //increase score
    gameScore = gameScore + 10;
    //disable both buttons
    document.getElementById("LegendCard1").disabled = true;
    document.getElementById("LegendCard4").disabled = true;
    //update score
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount4);
    if(clickCount4 > 2){
      clickCount4 = 2;}  

    //The same method shown above is followed for every other card that have same image
  }
  
  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip2(){
  document.getElementById("LegendCard2").innerHTML = "";
  document.getElementById("LegendCard2").innerHTML = "<img src=\"harry.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -11%;\">";
  clickCount2++;
  if(clickCount2 > 1 && clickCount10 < 1){
    clickCount2 = 1;}
  console.log(clickCount2);
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1){
    clickCount2 = 2;
    clickCount10 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard2").disabled = true;
    document.getElementById("LegendCard10").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount2);
    if(clickCount2 > 2){
      clickCount2 = 2;}  
  }
  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip3(){
  document.getElementById("LegendCard3").innerHTML = "";
  document.getElementById("LegendCard3").innerHTML = "<img src=\"voldemort.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -9;\">";
  clickCount3++;
  if(clickCount3 > 1 && clickCount7 < 1){
    clickCount3 = 1;}
  console.log(clickCount3);
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1){
    clickCount3 = 2;
    clickCount7 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard3").disabled = true;
    document.getElementById("LegendCard7").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount3);
    if(clickCount3 > 2){
      clickCount3 = 2;}  
  }

  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  
  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip4(){
  document.getElementById("LegendCard4").innerHTML = "";
  document.getElementById("LegendCard4").innerHTML = "<img src=\"nagini.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount4++;
  if(clickCount4 > 1 && clickCount1 < 1){
    clickCount4 = 1;}
  console.log(clickCount4);
  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount1 === 1){
    clickCount1 = 2;
    clickCount4 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard1").disabled = true;
    document.getElementById("LegendCard4").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount4);
    if(clickCount4 > 2){
      clickCount4 = 2;}  
  }
  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip5(){
  document.getElementById("LegendCard5").innerHTML = "";
  document.getElementById("LegendCard5").innerHTML = "<img src=\"locket.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount5++;
  if(clickCount5 > 1 && clickCount8 < 1){
    clickCount5 = 1;}
  console.log(clickCount5);
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1){
    clickCount5 = 2;
    clickCount8 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard5").disabled = true;
    document.getElementById("LegendCard8").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount5);
    if(clickCount5 > 2){
      clickCount5 = 2;}  
  }
  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip6(){
  document.getElementById("LegendCard6").innerHTML = "";
  document.getElementById("LegendCard6").innerHTML = "<img src=\"cup.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount6++;  
  if(clickCount6 > 1 && clickCount9 < 1){
    clickCount6 = 1;}
  console.log(clickCount6);
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1){
    clickCount6 = 2;
    clickCount9 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard6").disabled = true;
    document.getElementById("LegendCard9").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount6);
    if(clickCount6 > 2){
      clickCount6 = 2;}  
  }
  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip7(){
  document.getElementById("LegendCard7").innerHTML = "";
  document.getElementById("LegendCard7").innerHTML = "<img src=\"voldemort.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount7++;  
  if(clickCount7 > 1 && clickCount3 < 1){
    clickCount7 = 1;}
  console.log(clickCount7);
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1){
    clickCount3 = 2;
    clickCount7 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard3").disabled = true;
    document.getElementById("LegendCard7").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount7);
    if(clickCount7 > 2){
      clickCount7 = 2;}  
  }

  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  
  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
   
  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip8(){
  document.getElementById("LegendCard8").innerHTML = "";
  document.getElementById("LegendCard8").innerHTML = "<img src=\"locket.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount8++;
  if(clickCount8 > 1 && clickCount5 < 1){
    clickCount8 = 1;}
  console.log(clickCount8);
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount5 === 1){
    clickCount5 = 2;
    clickCount8 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard5").disabled = true;
    document.getElementById("LegendCard8").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount8);
    if(clickCount8 > 2){
      clickCount8 = 2;}  
  }
  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount6 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip9(){
  document.getElementById("LegendCard9").innerHTML = "";
  document.getElementById("LegendCard9").innerHTML = "<img src=\"cup.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount9++;
  if(clickCount9 > 1 && clickCount6 < 1){
    clickCount9 = 1;}
  console.log(clickCount9);
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount6 === 1){
    clickCount6 = 2;
    clickCount9 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard6").disabled = true;
    document.getElementById("LegendCard9").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount9);
    if(clickCount9 > 2){
      clickCount9 = 2;}  
  }
  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount2 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount5 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount7 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount8 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount9 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip10(){
  document.getElementById("LegendCard10").innerHTML = "";
  document.getElementById("LegendCard10").innerHTML = "<img src=\"harry.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount10++;
  if(clickCount10 > 1 && clickCount2 < 1){
    clickCount10 = 1;}
  console.log(clickCount10);
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount2 === 1){
    clickCount2 = 2;
    clickCount10 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard2").disabled = true;
    document.getElementById("LegendCard10").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount2);
    if(clickCount10 > 2){
      clickCount10 = 2;}  
  }
  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip11(){
  document.getElementById("LegendCard11").innerHTML = "";
  document.getElementById("LegendCard11").innerHTML = "<img src=\"diadem.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount11++;
  if(clickCount11 > 1 && clickCount12 < 1){
    clickCount11 = 1;}
  console.log(clickCount11);
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1){
    clickCount12 = 2;
    clickCount11 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard12").disabled = true;
    document.getElementById("LegendCard11").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount11);
    if(clickCount11 > 2){
      clickCount11 = 2;}  
  }
  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount11 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 

  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount11 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount11 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount11 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount11 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount11 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount11 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount11 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount11 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount11 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip12(){
  document.getElementById("LegendCard12").innerHTML = "";
  document.getElementById("LegendCard12").innerHTML = "<img src=\"diadem.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount12++;
  if(clickCount12 > 1 && clickCount11 < 1){
    clickCount12 = 1;}
  console.log(clickCount12);
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1){
    clickCount12 = 2;
    clickCount11 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard12").disabled = true;
    document.getElementById("LegendCard11").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount11);
    if(clickCount11 > 2){
      clickCount11 = 2;}  
  }
  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount12 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount3 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 

  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount12 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount12 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount12 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount12 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount12 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount12 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount12 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount12 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount12 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip13(){
  document.getElementById("LegendCard13").innerHTML = "";
  document.getElementById("LegendCard13").innerHTML = "<img src=\"ring.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount13++;
  if(clickCount13 > 1 && clickCount15 < 1){
    clickCount13 = 1;}
  console.log(clickCount13);
  
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount15 === 1){
    clickCount13 = 2;
    clickCount15 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard13").disabled = true;
    document.getElementById("LegendCard15").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount13);
    if(clickCount13 > 2){
      clickCount13 = 2;}  
  }

  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount13 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount13 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount13 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount13 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount13 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount13 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount13 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount13 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount13 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount13 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount13 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip14(){
  document.getElementById("LegendCard14").innerHTML = "";
  document.getElementById("LegendCard14").innerHTML = "<img src=\"diary.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount14++;
  if(clickCount14 > 1 && clickCount16 < 1){
    clickCount14 = 1;}
  console.log(clickCount14);
  
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount16 === 1){
    clickCount16 = 2;
    clickCount14 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard16").disabled = true;
    document.getElementById("LegendCard14").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount14);
    if(clickCount14 > 2){
      clickCount14 = 2;}  
  }

  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount14 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}

function Flip15(){
  document.getElementById("LegendCard15").innerHTML = "";
  document.getElementById("LegendCard15").innerHTML = "<img src=\"ring.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount15++;
  if(clickCount15 > 1 && clickCount13 < 1){
    clickCount15 = 1;}
  console.log(clickCount15);
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount13 === 1){
    clickCount13 = 2;
    clickCount15 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard13").disabled = true;
    document.getElementById("LegendCard15").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount15);
    if(clickCount15 > 2){
      clickCount15 = 2;}  
  }

  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount15 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount15 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount4 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount15 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount15 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount15 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount15 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount15 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount10 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount15 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount15 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount14 === 1 && clickCount16 < 1){
    document.getElementById("LegendCard14").innerHTML = "";
    document.getElementById("LegendCard14").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount15 = 0;
    clickCount14 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  
  if(clickCount16 === 1 && clickCount14 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount15 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}
  
function Flip16(){
  document.getElementById("LegendCard16").innerHTML = "";
  document.getElementById("LegendCard16").innerHTML = "<img src=\"diary.jpg\" width=\"90px\" height=\"90px\" style = \"margin-top: -5.5%; margin-left: -12%;\">";
  clickCount16++;
  if(clickCount16 > 1 && clickCount14 < 1){
    clickCount14 = 1;}
  console.log(clickCount14);
  if(clickCount1 === 1 && clickCount4 < 1){
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard1").innerHTML = "";
    document.getElementById("LegendCard1").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount1 = 0;
    clickCount16 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount14 === 1){
    clickCount16 = 2;
    clickCount14 = 2;
    gameScore = gameScore + 10;
    document.getElementById("LegendCard16").disabled = true;
    document.getElementById("LegendCard14").disabled = true;
    document.getElementById("score").innerHTML = "Score: " + gameScore;
    console.log(clickCount16);
    if(clickCount16 > 2){
      clickCount16 = 2;}  
  }

  if(clickCount2 === 1 && clickCount10 < 1){
    document.getElementById("LegendCard2").innerHTML = "";
    document.getElementById("LegendCard2").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount2 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount3 === 1 && clickCount7 < 1){
    document.getElementById("LegendCard3").innerHTML = "";
    document.getElementById("LegendCard3").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount3 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount4 === 1 && clickCount1 < 1){
    document.getElementById("LegendCard4").innerHTML = "";
    document.getElementById("LegendCard4").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount4 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }

  if(clickCount5 === 1 && clickCount8 < 1){
    document.getElementById("LegendCard5").innerHTML = "";
    document.getElementById("LegendCard5").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount5 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  } 
  if(clickCount6 === 1 && clickCount9 < 1){
    document.getElementById("LegendCard6").innerHTML = "";
    document.getElementById("LegendCard6").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount6 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount7 === 1 && clickCount3 < 1){
    document.getElementById("LegendCard7").innerHTML = "";
    document.getElementById("LegendCard7").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount7 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount8 === 1 && clickCount5 < 1){
    document.getElementById("LegendCard8").innerHTML = "";
    document.getElementById("LegendCard8").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount8 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount9 === 1 && clickCount6 < 1){
    document.getElementById("LegendCard9").innerHTML = "";
    document.getElementById("LegendCard9").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount9 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount10 === 1 && clickCount2 < 1){
    document.getElementById("LegendCard10").innerHTML = "";
    document.getElementById("LegendCard10").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount10 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount11 === 1 && clickCount12 < 1){
    document.getElementById("LegendCard11").innerHTML = "";
    document.getElementById("LegendCard11").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount11 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount12 === 1 && clickCount11 < 1){
    document.getElementById("LegendCard12").innerHTML = "";
    document.getElementById("LegendCard12").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount12 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount13 === 1 && clickCount15 < 1){
    document.getElementById("LegendCard13").innerHTML = "";
    document.getElementById("LegendCard13").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount13 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  if(clickCount15 === 1 && clickCount13 < 1){
    document.getElementById("LegendCard15").innerHTML = "";
    document.getElementById("LegendCard15").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    document.getElementById("LegendCard16").innerHTML = "";
    document.getElementById("LegendCard16").innerHTML = "<i class=\"fa-sharp fa-solid fa-brain\"></i>";
    clickCount16 = 0;
    clickCount15 = 0;
    gameScore = gameScore - 5;
    document.getElementById("score").innerHTML = "Score: " + gameScore;  
  }
  gameOver();
}



