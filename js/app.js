// Quiz Script //
var submitAnswers = document.querySelector("#submitanswers");

 //quiz begins, no answer
var correct = 0;
var score = document.getElementById('score');

// ask questions
var answer1 = document.querySelector('#question1').value;
var answer2 = document.querySelector('#question2').value;
var answer3 = document.querySelector('#question3').value;
var answer4 = document.querySelector('#question4').value;
var answer5 = document.querySelector('#question5').value;

submitAnswers.addEventListener('click', function(){
     
      if (answer1.toUpperCase() === 'DAVID TENNANT') {
         correct += 1;
      }

      if (answer2.toUpperCase() === 'BLUE') {
         correct += 1;
      }
     
      if (answer3.toUpperCase() === 'CLARA OSWALD') {
       correct += 1;
      }
     
      if (answer4.toUpperCase() === 'CULT OF SKARO') {
       correct += 1;
      }
     
      if (answer5.toUpperCase() ==='K9' || answer5.toUpperCase() === 'K-9') {
       correct += 1;
      }
     
     // output results
     document.querySelector('.quizquestons').style.display = "none";
     
     score.innerHTML =  '<p>You got " + correct + " out of 5 questions</p>';
     
     // output rank
     if (correct === 5) {
       score.innerHTML = '<p><b>You got Gold. You know your Doctor Who! You answered 5/5 correct</b><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>';
      } else if ( correct === 4 ){
       score.innerHTML =  '<p><b>You got 4/5 correct. <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> You know some stuff about Doctor Who!</b></p>'
      }  else if ( correct === 3){
      score.innerHTML =  '<p><b>You got 3/5 correct. <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> You know some stuff about Doctor Who!</b></p>'
      } else if ( correct === 2){
      score.innerHTML =  '<p><b>You got 2/5 correct. <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> You know some stuff about Doctor Who!</b></p>'
      } else if ( correct === 1) {
       score.innerHTML =  '<p><b>You got 1/5 correct. <i class="fa fa-star" aria-hidden="true"></i> You need to go watch some more Doctor Who!</b></p>'
      } else {
       score.innerHTML =  '<p><b>You got 0/5 correct. You really need to go watch more Doctor Who!</b></p>'
      }

});
