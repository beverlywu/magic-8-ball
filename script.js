$(document).ready(function(){

	var question;
	
var magic8Ball = {};
magic8Ball.answers = [ "are you crazy?!", "heck no", "no way", "YES", "decide for me"];

magic8Ball.askQuestion = function(question) {
	var randomNumber = Math.random();
	var randomIndex = randomNumber * this.answers.length;
	var floorRandomIndex = Math.floor(randomIndex);
	var answer = this.answers[floorRandomIndex];
	console.log(question);
	console.log(answer);
	$("#answer").text(answer)
			//.css("background", "radial-gradient(#fafafa, transparent)");	
//	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#8ball").attr("src", "answerside2.png");
	$("#ball").effect("shake");
	$("#answer").fadeIn(4000);
			
};
$("#answer").hide();

//magic8Ball.askQuestion("Will I learn Javascript?");

	
function questionButton() {
	$("#answer").hide();
	//$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	$("#8ball").attr("src", "magic8ballQuestion2.png");
	setTimeout (
		function() {
			question = prompt("Ask a yes or no question");
			magic8Ball.askQuestion(question);
		}, 500);
	
}

//document.getElementById("questionButton").addEventListener("click", questionButton);
$("#questionButton").click(questionButton);


	
});
