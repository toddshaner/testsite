window.onload = function() {
	var integScoreInput = document.getElementById("integScore");
	var integPercentInput = document.getElementById("integPercent");
	var quantScoreInput = document.getElementById("quantScore");
	var quantPercentInput = document.getElementById("quantPercent");
	var verbalScoreInput = document.getElementById("verbalScore");
	var verbalPercentInput = document.getElementById("verbalPercent");
	var totalScoreInput = document.getElementById("totalScore");
	var totalPercentInput = document.getElementById("totalPercent");

	integScoreInput.addEventListener("change", updateTotal);
	integPercentInput.addEventListener("change", updateTotal);
	quantScoreInput.addEventListener("change", updateTotal);
	quantPercentInput.addEventListener("change", updateTotal);
	verbalScoreInput.addEventListener("change", updateTotal);
	verbalPercentInput.addEventListener("change", updateTotal);

	function updateTotal() {
		var integScore = integScoreInput.value;
		var integPercent = integPercentInput.value;
		var quantScore = quantScoreInput.value;
		var quantPercent = quantPercentInput.value;
		var verbalScore = verbalScoreInput.value;
		var verbalPercent = verbalPercentInput.value;
		var totalScore = parseInt(integScore) + parseInt(quantScore) + parseInt(verbalScore);
		var totalPercent = parseInt(integPercent
