var count = 0;
function check() {
    var questionOne = document.quiz.questionOne.value;
    var questionTwo = document.quiz.questionTwo.value;
    var questionThree = document.quiz.questionThree.value;
    var questionFour = document.quiz.questionFour.value;
    var questionFive = document.quiz.questionFive.value;
    var questionSix = document.quiz.questionSix.value;
    var questionSeven = document.quiz.questionSeven.value;
    var questionEight = document.quiz.questionEight.value;
    var questionNine = document.quiz.questionNine.value;
    var questionTen = document.quiz.questionTen.value;
    var questionEleven = document.quiz.questionEleven.value;
  
    if (questionOne == "2") {
      count += 4;
    }
    if (questionTwo == "2") {
      count += 4;
    }
    if (questionThree == "3") {
      count += 4;
    }
    if (questionFour == "3") {
      count += 4;
    }
    if (questionFive == "4") {
      count += 4;
    }
    if (questionSix == "2") {
      count += 4;
    }
    if (questionSeven == "2") {
      count += 4;
    }
    if (questionEight == "3") {
      count += 4;
    }
    if (questionNine == "2") {
      count += 4;
    }
    if (questionTen == "4") {
      count += 4;
    }
    if (questionEleven == "1") {
      count += 4;
    }
    return count
    // document.getElementById("after_submit").style.visibility = "visible";

    //   document.getElementById("number_count").innerHTML =
    //     "Your score is: " + count + "/55";
    }
      $(document).ready(function() {
          $("form").submit(function(event){
            check()
            $("#button").hide();
            $("#quiz").hide();
            $("#number_count").text("Your score is: " + count + "/55")
            $("#number_count").show();
            event.preventDefault();
          })
        
      });