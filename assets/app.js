"use strict";

$("#alert-correct").hide();
$("#alert-error").hide();

$(document).ready(() =>{

  let qaCount = 0;
  let points = 0;
  let errors = 0;

  const answerIDs = ["#a1", "#a2", "#a3", "#a4"];
  const answerVals = ["#A", "#B", "#C", "#D"];
  const mixedQuestions = getRand(10);

//End of Game Function:
  function showResults(){
    const resultsHeader = "<h2>Results</h2>";
    const results = "<ul><li><strong>Correct: </strong>"+points+"</li><li><strong>Errors: </strong>"+errors
    +"</li></ul>";

    $('#end').empty();
    $('#end').html(resultsHeader);
    $('#answer-box').empty();
    $('#answer-box').html(results);
    $('#buttons').append('<a href="./index.html"><button class="btn btn-lg btn-danger">Retry</button></a>');

    switch (points) {
      case 0:
      case 1:
      case 2:
        $("#verdict").text("Did you try to lose?");
        break;
      case 3:
        $("#verdict").text("Well, it could have been worse.");
        break;
      case 4:
        $("#verdict").text("In many east Asian cultures, four is a very unlucky number.");
        break;
      case 5:
        $("#verdict").text("Hey, half! Keep studying.");
        break;
      case 6:
        $("#verdict").text("Alright, just over the hill of failure!");
        break;
      case 7:
        $("#verdict").text("Seven, that's almost good.");
        break;
      case 8:
        $("#verdict").text("Not bad!");
        break;
      case 9:
        $("#verdict").text("The only thing worse than almost failing is almost succeeding.");
        break;
      case 10:
        $("#verdict").text("Flawless victory!");
        break;
      default: "Thank's for playing!";
    }
  }

//Start game function: Displays the question and answer options.
  function loadQA(){
    //Resets the radio buttons and alerts
     $("input[type=radio][name=answer]").prop("checked", false);
     $("#answer-btn").prop("disabled", true);
     $('#alert-correct').hide(1500);
     $("#alert-error").hide(1500);
    /*---------------------------------*/

     if(qaCount<qa.length){

      $("#question").text(qa[mixedQuestions[0]].question);
      const mixedAnswers = getRand(4);
        for (let a = 0; a<answerIDs.length; a++){
          //show answer choices
          $(answerIDs[a]).text(qa[mixedQuestions[0]].answers[mixedAnswers[a]]);
          //reassign answer values
          $(answerVals[a]).val(qa[mixedQuestions[0]].answers[mixedAnswers[a]]);
        }
      }else{
        // end game function
        showResults();
      }
   }

  loadQA();

//Disable the answer button until an answer is selected.
  $("input[type=radio][name=answer]").change(()=>{
     if($("#answer-btn").prop("disabled")){
       $("#answer-btn").prop("disabled", false);
     }
  });

 $("#answer-btn").click(()=>{
   //check if aswer is correct
  let userChoice = $("input[name=answer]:checked").val();
  if(userChoice ===  qa[mixedQuestions[0]].correct){
    points++;
    $("#points").text(points);
    $("#alert-correct").show(900);
    }else{
      errors++;
      $("#errors").text(errors);
      $("#alert-error").show(900);
    }
     mixedQuestions.shift();
     qaCount++;
     setTimeout(loadQA, 1500);
 });

});