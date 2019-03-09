console.log("js for crystal game connected")

	var wins = 0;
	var losses = 0;

$(".btn-lg").on("click", function() {
	var rubyNum = 0;
	var diamondNum = 0;
	var sapphireNum = 0;
	var emeraldNum = 0;

	var targetNumber = Math.floor(Math.random() * 120) + 19;
	console.log("The number to match is " + targetNumber);
	$("#targetNumber").html(targetNumber);
	$("#winCount").html(wins);
	$("#lossCount").html(losses);
	$("#alert").empty();

	var counter = 0;
	$("#yourScore").html(counter);

	rubyNum = Math.floor(Math.random() * 12) + 1;
	console.log("The ruby random number is " + rubyNum);
	var ruby = $("#ruby");
	ruby.attr("data-crystalvalue", rubyNum);

	diamondNum = Math.floor(Math.random() * 12) + 1;
	console.log("The diamond random number is " + diamondNum);
	var diamond = $("#diamond");
	diamond.attr("data-crystalvalue", diamondNum);

	sapphireNum = Math.floor(Math.random() * 12) + 1;
	console.log("The sapphire random number is " + sapphireNum);
	var sapphire = $("#sapphire");
	sapphire.attr("data-crystalvalue", sapphireNum);

	emeraldNum = Math.floor(Math.random() * 12) + 1;
	console.log("The emerald random number is " + emeraldNum);
	var emerald = $("#emerald");
	emerald.attr("data-crystalvalue", emeraldNum);


	$(".img-thumbnail").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	counter += crystalValue;
    	$("#yourScore").html(counter);
    	if (counter === targetNumber) {
    		$("#alert").append("<div class='alert alert-success' role='alert'>Well Done! You won, select the Start Game button to start the next game.</div>");
      		wins++;
      		counter = 0;
      		$("#winCount").html(wins);
    	}
    	else if (counter > targetNumber) {
      		$("#alert").append("<div class='alert alert-danger' role='alert'>You lost, select the Start Game button to start the next game. Better Luck next time!</div>");
      		losses++;
      		counter = 0;
      		$("#lossCount").html(losses);
    	}
    });			
});