// JavaScript Document
var answers = ["D","B","C","A","B","C","A","D","B","D"];
var tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

var score = 0;
function getScore(){
 
  for (var i=0; i<tot; i++)
    if(getCheckedValue("q"+i)===answers[i]); // increment only (score += 1)
  return score++;
}

function returnScore(){
  alert("Your score is "+ getScore() +"/"+ tot);
}

//create button
//var button = document.createElement('BUTTON'); 

//text to display on button
//var text = document.createTextNode("View Results"); 

//returnScore();
//console.log(score);
