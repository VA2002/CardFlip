//sorts all users for amateur tier leaderboard
function sortAmateur(){
    //only if there is something in local storage
    if(localStorage.length > 0){
       //users and their amateur scores will be stored in these arrays 
       var amateurScoreArray = new Array();
       var amateurUserArray = new Array();
       //users and their respective amateur scores stored with this loop
       for (i=0;i<localStorage.length;i++){
            amateurScoreArray[i] = JSON.parse(localStorage.getItem(localStorage.key(i))).amateurscore;
            amateurUserArray[i] = JSON.parse(localStorage.getItem(localStorage.key(i))).username;
       }
    }
    console.log(amateurScoreArray);
    console.log(amateurUserArray);

    //these loops are used to provide score array elements with new position, which in the end leads to it being in descending order
    //usernames are also given new array positions depending on where their respective score is
    for(i=0; i<localStorage.length; i++){
        for(a = 0; a<localStorage.length; a++){
            for(x = 1; x < localStorage.length ++; x ++){
                //if any array element that comes later than another array element is bigger, they are swapped  
                if(amateurScoreArray[a] < amateurScoreArray[i]){
                    [amateurScoreArray[a], amateurScoreArray[i]] = [amateurScoreArray[i], amateurScoreArray[a]];
                    [amateurUserArray[a], amateurUserArray[i]] = [amateurUserArray[i], amateurUserArray[a]];          
                }  
            } 
        }  
    }

    //usernames printed based on descending order of their amateur scores
    document.getElementById("username1A").innerHTML = amateurUserArray[0];
    document.getElementById("username2A").innerHTML = amateurUserArray[1];
    document.getElementById("username3A").innerHTML = amateurUserArray[2];
    document.getElementById("username4A").innerHTML = amateurUserArray[3];
    document.getElementById("username5A").innerHTML = amateurUserArray[4];
    document.getElementById("username6A").innerHTML = amateurUserArray[5];
    //scores printed in descending order
    document.getElementById("score1A").innerHTML = amateurScoreArray[0];
    document.getElementById("score2A").innerHTML = amateurScoreArray[1]; 
    document.getElementById("score3A").innerHTML = amateurScoreArray[2]; 
    document.getElementById("score4A").innerHTML = amateurScoreArray[3]; 
    document.getElementById("score5A").innerHTML = amateurScoreArray[4]; 
    document.getElementById("score6A").innerHTML = amateurScoreArray[5]; 

    console.log(amateurScoreArray);
    console.log(amateurUserArray);
    return amateurScoreArray; //returns the amateurScoreArray
}

//sorts all users for legend tier leaderboard
function sortLegend(){
    //only if there is something in local storage
    if(localStorage.length > 0){
        //users and their legend scores will be stored in these arrays 
       var legendScoreArray = new Array();
       var legendUserArray = new Array();
        //users and their respective legend scores stored with this loop
       for (i=0;i<localStorage.length;i++){
        legendScoreArray[i] = JSON.parse(localStorage.getItem(localStorage.key(i))).legendscore;
        legendUserArray[i] = JSON.parse(localStorage.getItem(localStorage.key(i))).username;
       }
    }
    console.log(legendScoreArray);

    //these loops are used to provide score array elements with new position, which in the end leads to it being in descending order
    //usernames are also given new array positions depending on where their respective score is
    for(i=0; i<localStorage.length; i++){
        for(a = 0; a<localStorage.length; a++){
            for(x = 1; x < localStorage.length ++; x ++){
                //if any array element that comes later than another array element is bigger, they are swapped
                if(legendScoreArray[a] < legendScoreArray[i]){
                    [legendScoreArray[a], legendScoreArray[i]] = [legendScoreArray[i], legendScoreArray[a]];
                    [legendUserArray[a], legendUserArray[i]] = [legendUserArray[i], legendUserArray[a]];
                }
            }
        }
    }

    //usernames printed based on descending order of their legend scores
    document.getElementById("username1L").innerHTML = legendUserArray[0];
    document.getElementById("username2L").innerHTML = legendUserArray[1];
    document.getElementById("username3L").innerHTML = legendUserArray[2];
    document.getElementById("username4L").innerHTML = legendUserArray[3];
    document.getElementById("username5L").innerHTML = legendUserArray[4];
    document.getElementById("username6L").innerHTML = legendUserArray[5];
    //scores printed in descending order
    document.getElementById("score1L").innerHTML = legendScoreArray[0];
    document.getElementById("score2L").innerHTML = legendScoreArray[1]; 
    document.getElementById("score3L").innerHTML = legendScoreArray[2]; 
    document.getElementById("score4L").innerHTML = legendScoreArray[3]; 
    document.getElementById("score5L").innerHTML = legendScoreArray[4]; 
    document.getElementById("score6L").innerHTML = legendScoreArray[5]; 

    console.log(legendScoreArray);
    return legendScoreArray;     //returns the legendScoreArray
}

 
//grouping both the above functions into the getUsers function
function getUsers(){
    sortAmateur();
    sortLegend();
}

//calling the above function
getUsers();
  