$(window).bind("load",()=>{
	newGame()
	$('#copyPasteLogo').delay(200).fadeIn(250)
	$('#copyPasteLogo').delay(975).fadeOut(250)
	$("#introScreen").delay(1700).fadeOut(750)
})

const compliments = [
	'Awesome!',
	'Nice Job!',
	'Doin\' Great!',
	'Amazing!',
	'Well Done!',
	'Wow!',
	'You\'re Great!',
	'Super!',
	'Super Cool!',
	'Very Cool!',
	'Super Awesome!',
    'Phew!',
    'Keep It Up!'
]

const alphabet = [
	'a', 'b', 'c', 'd', 'e',
	'f', 'g', 'h', 'i', 'j',
	'k', 'l', 'm', 'n', 'o',
	'p', 'q', 'r', 's', 't',
	'u', 'v', 'w', 'x', 'y',
	'z'
]

const wordList = [
	'hello',
	'world',
	'engine',
	'jazz',
	'unreal',
	'united',
	'states',
	'hosting',
	'number',
	'steam',
	'information',
	'character',
	'fantastic',
	'greatest',
	'social',
	'clock',
	'timer',
	'wireless',
	'interface',
	'internet',
	'videos',
	'chat',
	'rainy',
	'days',
	'assets',
	'pictures',
	'documents',
	'keeper',
	'drive',
	'truck',
	'flunk',
	'trunk',
	'index',
	'projects',
	'connected',
	'water',
	'song',
	'cheese',
	'failure',
	'beans',
	'cringe',
	'culture',
	'creeper',
	'mining',
	'daughter',
	'absolute',
	'styles',
	'number',
	'indeed',
	'future',
	'opinion',
	'expectations',
	'rolling',
	'increasing',
	'community',
	'actually',
	'clash',
	'royal',
	'crash',
	'cash',
	'money',
	'history',
	'galaxy',
	'through',
	'common',
	'english',
	'words',
	'together',
	'children',
	'child',
	'toward',
	'war',
	'pattern',
	'against',
	'center',
	'person',
	'bank',
	'govern',
	'science',
	'appear',
	'server',
	'mountain',
	'north',
	'began',
	'young',
	'usual',
	'enough',
	'measure',
	'product',
	'numeral',
	'complete',
	'question',
	'happen',
	'remember',
	'hundred',
	'thousand',
	'between',
	'city',
	'cities',
	'story',
	'interest',
	'language',
	'among',
	'weight',
	'perhaps',
	'brought',
	'thousand',
	'close',
	'night',
	'day',
	'light',
	'darkness',
	'dark',
	'spire',
	'ten',
	'western',
	'eastern',
	'southern',
	'northern',
	'step',
	'true',
	'king',
	'queen',
	'prince',
	'heard',
	'farm',
	'pass',
	'early',
	'supercalafragilisticexpialidocious',
	'gamer',
	'anger',
	'happy',
	'sad',
	'denmark',
	'human',
	'jazz',
	'bee',
	'cringe',
	'telephone',
	'marker',
	'computer',
	'laptop',
	'keyboard',
	'anime',
	'animation',
	'cartoon',
	'shows',
	'movies',
	'director',
	'job',
	'money',
	'income',
	'profit',
	'house',
	'car',
	'kids',
	'wife',
	'women',
	'man',
	'person',
	'human',
    'bright',
    'sight',
    'flight',
    'hippo',
    'crypt',
    'textile',
    'underground',
    'chamber',
    'especially',
    'beneath',
    'subterranean',
    'constructed',
    'heritage',
    'techniques',
    'adversarial',
    'constructing',
    'variant',
    'columned',
    'restored',
    'temporarily'
]

wordToGuess = 'None'
failedGuesses = []
passedGuesses = []
livesLeft = 6

function renderWord() {
	var string = ''
	for(let i=0; i < wordToGuess.length; i++) {
		if(passedGuesses.indexOf(wordToGuess[i])!=-1) {
			string = string + wordToGuess[i].toUpperCase() + " "
		} else {
			string = string + "_ "
		}
	}
	$('#wordToGuess').html(string)
	if(string.removeSpace().toLowerCase() == wordToGuess.toLowerCase()) {
		newGameMessage(kg.randomItem(compliments))
	}
}

function showWord() {
	$('#wordToGuess').html(wordToGuess.split('').join(" ").toUpperCase())
}

function makeGuess(elem, letter) {
	if(wordToGuess.indexOf(letter.toLowerCase()) != -1) {
		passedGuesses.push(letter.toLowerCase())
		$(elem).css({"background-color": "rgba(40,240,40,0.5)"})
		renderWord()
	} else {
		if(failedGuesses.indexOf(letter.toLowerCase()) == -1) {
			livesLeft = livesLeft - 1
			if(livesLeft == 0) {
				newGameMessage("Word Failed.")
				showWord()
			}
			$('#hangmanImg').attr({"src": "./assets/hangman" + (6 - livesLeft) + ".png"})
			$(elem).css({"background-color": "rgba(255,40,40,0.5)"})
			failedGuesses.push(letter.toLowerCase())
		}
	}
}

function newGameMessage(message) {
	$('#endingMessage').html(message)
	$('#overlay').fadeIn(500)
}

function newGame() {
	wordToGuess = kg.randomItem(wordList)
	loadNewGame()
}

function loadNewGame() {
	$('#guessButtons').html('')
	$('#hangmanImg').attr({"src": "./assets/hangman0.png"})
	failedGuesses = []
	passedGuesses = []
	livesLeft = 6
	for(let i=0; i < alphabet.length; i++){
		var letter = alphabet[i].toUpperCase()
		$('#guessButtons').append(`<div class="guessBtn" onclick="makeGuess(this,'${letter}')">${letter}</div>`)
	}
	renderWord()
}

function reportBug() {
    window.open('https://rainydais.com/bugreport?app=Hangman%20(CopyPaste%20Games)', 'popUpWindow', 'height=675,width=600,left=10,top=10,,scrollbars=yes,menubar=no')
    return false
}
