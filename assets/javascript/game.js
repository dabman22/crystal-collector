var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var games = ["halo", "forza", "stateofdecay", "gearsofwar", "crackdown", "titanfall", "seaoftheives", "callofduty", "skyrim", "fallout", "assassinscreed", "farcry", "justcause", "tombraider", "fortnite", "pubg", "apexlegends", "battlefield"];

var gameStarted = false;
var currentWord;
var wordAsDashes;
var guessesLeft;
var lettersGuessed;
var numWins = 0;
var numLosses = 0;
var getNewWord;
var wordPlace; 
var correctGuesses;
var wordAsArr = [];
var dashesArray = [];

function initialize() {
	gameStarted = true;
	lettersGuessed = [];9
	correctGuesses = 0;
	wordPlace = Math.floor(Math.random() * 19);
	currentWord = games[wordPlace];			
	guessesLeft = 10;	
	wordAsDashes = makeIntoDashes(currentWord);	
	wordAsArr = currentWord.split('');			
	dashesArray = wordAsDashes.split('');		
	document.getElementById("currentWord").innerHTML = wordAsDashes;
	document.getElementById("lettersGuessed").innerHTML = "--";
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
}

// dashes for letters in hangman
function makeIntoDashes(word) {
	var dashes = "";
	for (i = 0; i < word.length - 1; i++) {
		dashes += "_ ";
	}
	dashes += "_";
	return dashes;
}

// Main function that controls what to do when you type
function playGame(letter) {
	var letter = letter.toLowerCase();

	// Checks if it is a letter
	if (alphabet.indexOf(letter) > -1) {
		if (wordAsArr.indexOf(letter) > -1) {
			correctGuesses++;
			displayLetter(letter);
		}
		else {
			if (lettersGuessed.indexOf(letter) > -1) {
				return;
			}
			else {
				guessesLeft--;
				document.getElementById("guessesLeft").innerHTML = guessesLeft;
				lettersGuessed.push(letter);
				document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(' ');
				if (guessesLeft == 0) {
					alert("Sorry! The correct answer is " + currentWord);
					initialize();
					numLosses++;
					document.getElementById("losses").innerHTML = numLosses;
				}
			}
		}
	}
}

// Displays letter if it's in word
function displayLetter(letter) {
	// for each char in wordAsDashes, if matches currentWord --> display
	for (i = 0; i < currentWord.length; i++) {
		if (letter == wordAsArr[i]) {
			dashesArray[i * 2] = letter;
			console.log(dashesArray);
		}
	}
	document.getElementById("currentWord").innerHTML = dashesArray.join("");
	checkForWin();
}

// looks for win by looking for "_"
function checkForWin() {
	if (dashesArray.indexOf("_") === -1) {
		alert("You got it! The correct answer is " + currentWord);
		numWins++;
		document.getElementById("wins").innerHTML = numWins;
		initialize();
	}
}

document.onkeyup = function (event) {
	if (!gameStarted) {
		document.getElementById("letsPlay").innerHTML = "";
		initialize();
		document.getElementById("currentWord").innerHTML = wordAsDashes.split(",");
		console.log(currentWord);
		gameStarted = true;
	}
	else {
		playGame(event.key);
	}
}