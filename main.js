var prompt = require ('prompt-sync').prompt;
var game;
var gameWinner;
var players;
var turn;
var player;

while (true) {
	gameWinner = false;
	game = [
		[' ', ' ', ' '],
		[' ', ' ', ' '],
		[' ', ' ', ' ']
	];

	players = {
		X: null,
		O: null
	}

	turn = 0

	player = [];

	console.log("What is player one's name?")

	players.X = prompt();

	console.log("And player two's?")

	player.O = prompt();

	var winner = null;

	var currentPlayer = 'X'

	console.log('   1   2   3  ');
	console.log('_______________');
	console.log('1|   |   |   |');
	console.log('_______________');
	console.log('2|   |   |   |');
	console.log('_______________');
	console.log('3|   |   |   |');
	console.log('_______________');


	while (turn <= 9) {

		validMove = false

		while (validMove === false) {
		
			userInput = prompt().split(' ');

			var x = parseInt(userInput[0]) - 1;

			var y = parseInt(userInput[1]) - 1;

			if ((x <= 3) && (y <=3)){

				if (game[x][y] === ' ')
					{
						game[x][y] = currentPlayer;
						validMove = true;
						turn++;
					}

					else {

						console.log('Please try again');
					};
				}
				else {

					console.log('Not a vaild move.');

			};
		};
		console.log('   1   2   3  ');
		console.log('_______________');
		console.log('1| '+ game[0][0] + ' | '+ game[0][1] + ' | '+ game[0][2] +  ' |');
		console.log('_______________');
		console.log('2| '+ game[1][0] + ' | '+ game[1][1] + ' | '+ game[1][2] +  ' |');
		console.log('_______________');
		console.log('3| '+ game[2][0] + ' | '+ game[2][1] + ' | '+ game[2][2] +  ' |');
		console.log('_______________');

		if  ((     ( game[x][0] === game[x][1]) && ( game[x][1] === game[x][2]) )
					||  (  ( game[0][y] === game[1][y]) && ( game[1][y] === game[2][y]) )
					||  ((   game[0][0] === game[1][1])  
						&& ( game[1][1] === game[2][2])
						&& ( game[1][1] !== " ") )
					||  (( game[0][2] === game[1][1]) 
						&& ( game[1][1] === game[2][0])
						&& ( game[1][1] !== " ") ) ) 
		{
			console.log('Great Job ' + currentPlayer);
			
			gameWinner = true;
			
			break;

		}

			else if(turn === 9) {
			
				console.log("Alright, we'll call it a draw.");
				
				break;
			}


		if (currentPlayer === 'X') {
			
			currentPlayer = 'O';
		}

		else {currentPlayer = 'X'}
	}
}

