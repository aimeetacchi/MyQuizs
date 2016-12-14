function myQuiz() {
    
	//quiz begins, no answer
	var correct = 0;
	
	// ask questions
	var answer1 = prompt("Who plays the 10th Doctor in Doctor Who?");
	if (answer1.toUpperCase() === 'DAVID TENNANT') {
		correct += 1;
	}
	
	var answer2 = prompt("What color is the Tardis?");
	if (answer2.toUpperCase() === 'BLUE') {
		correct += 1;
	}
	
	var answer3 = prompt("Who is Rose Tyler played by?");
	if (answer3.toUpperCase() === 'BILLIE PIPER') {
		correct += 1;
	}
	
	var answer4 = prompt("Which of the Doctors enemies wants to exterminate him?");
	if (answer4.toUpperCase() === 'DALEK') {
		correct += 1;
	}
	
	var answer5 = prompt("What is the Metal dog who's a friend of the Doctors called");
	if (answer5.toUpperCase() ==='K9') {
		correct += 1;
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
