var score = 0;

//2

document
	.querySelector("#increase-5")
	.addEventListener("click", function() {
		score += 5;
		changeScore();
	});

document
	.querySelector("#decrease-5")
	.addEventListener("click", function() {
		score -= 5;
		changeScore();
	});

//3

document
	.querySelector("#submit-custom-score")
	.addEventListener("click", function() {
		var newScore = document.querySelector("#custom-score").value;
		score = parseInt(newScore);


		//Clear existing value
		document.querySelector("#custom-score").value = "";

		changeScore();
	});

//Bonus + Super bonus

function changeScore() {
	if (score < 0) {
		return false;
	} else {
		document.querySelector("#score").textContent = score + "Points";
	}
}
