/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

function myQuiz() {

   //quiz begins, no answer
   var correct = 0;
   console.log(correct);
   // ask questions
   var answer1 = document.querySelector('#question1').value;
   var answer2 = document.querySelector('#question2').value;
	var answer3 = document.querySelector('#question3').value;
	var answer4 = document.querySelector('#question4').value;
	var answer5 = document.querySelector('#question5').value;
   console.log(answer1 + answer2 + answer3 + answer4 + answer5);

   if (answer1.toUpperCase() === 'DAVID TENNANT') {
      correct += 1;
      console.log(correct);
   }

   if (answer2.toUpperCase() === 'BLUE') {
      correct += 1;
      console.log(correct);
   }
	
   if (answer3.toUpperCase() === 'CLARA OSWALD') {
   	correct += 1;
		console.log(correct);
   }
	
   if (answer4.toUpperCase() === 'CULT OF SKARO') {
   	correct += 1;
		console.log(correct);
   }
	
   if (answer5.toUpperCase() ==='K9' || answer5.toUpperCase() === 'K-9') {
   	correct += 1;
		console.log(correct);
   }
	
   // output results
   document.getElementById('score').innerHTML =  '<p>You got " + correct + " out of 5 questions</p>';
	
   // output rank
   if (correct === 5) {
   	document.getElementById('score').innerHTML = '<p><b>You got Gold. You know your Doctor Who! You answered 5/5 correct</b><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>';
   } else if ( correct === 4 ){
   	document.getElementById('score').innerHTML =  '<p><b>You got 4/5 correct. <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> You know some stuff about Doctor Who!</b></p>'
   }  else if ( correct === 3){
   	document.getElementById('score').innerHTML =  '<p><b>You got 3/5 correct. <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> You know some stuff about Doctor Who!</b></p>'
   } else if ( correct === 2){
   	document.getElementById('score').innerHTML =  '<p><b>You got 2/5 correct. <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> You know some stuff about Doctor Who!</b></p>'
   }else if ( correct === 1) {
   	document.getElementById('score').innerHTML =  '<p><b>You got 1/5 correct. <i class="fa fa-star" aria-hidden="true"></i> You need to go watch some more Doctor Who!</b></p>'
   } else {
   	document.getElementById('score').innerHTML =  '<p><b>You got 0/5 correct. You really need to go watch more Doctor Who!</b></p>'
   }
}