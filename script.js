$(document).ready(function(){

	var question;
	
var magic8Ball = {};
magic8Ball.answers = ["don't bother me", "why do you want to know", "avoid at all costs", "duh", "yes", "haha no", "answer your own damn question"];

magic8Ball.askQuestion = function(question) {
	var randomNumber = Math.random();
	var randomIndex = randomNumber * this.answers.length;
	var floorRandomIndex = Math.floor(randomIndex);
	var answer = this.answers[floorRandomIndex];
	console.log(question);
	console.log(answer);
	$("#answer").text(answer)
			//.css("background", "radial-gradient(#fafafa, transparent)");
	
};

//magic8Ball.askQuestion("Will I learn Javascript?");

	
function questionButton() {
	question = prompt("Ask the Magic 8 ball your question");
	magic8Ball.askQuestion(question);
}

//document.getElementById("questionButton").addEventListener("click", questionButton);
$("#questionButton").click(questionButton);


	
});

