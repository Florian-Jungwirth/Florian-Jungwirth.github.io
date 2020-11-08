let winsPlayer1 = 0, winsPlayer2 = 0;
let proove1 = false, proove2 = false;
let num1 = 0, num2 = 0;
let delay = [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000];
// Neu würfeln (Aufruf per Button-Klick)
function neuerWurf1() {
	for(let i = 0; i < 10; i++) {
		setTimeout(function() {
			num1 = Math.floor(Math.random() * 6) + 1;
			document.getElementById('erg1').innerHTML = num1;
			imageCube1();
			if(i === 9) {proove1 = true;
			whoWins();}}, delay[i]);
	}
}

function neuerWurf2() {
	for(let i = 0; i < 10; i++) {
		setTimeout(function() {num2 = Math.floor(Math.random() * 6) + 1;
			document.getElementById('erg2').innerHTML = num2;
			imageCube2();
			if(i === 9) {proove2 = true;
			whoWins();}}, delay[i]);
	}
}

function imageCube1 () {
	switch (num1) {
		case 1:
			document.images['first'].src="images/PinClipart_cube_1.png";
			break;
		
		case 2:
			document.images['first'].src="images/PinClipart_cube_2.png";
			break;
				
		case 3:
			document.images['first'].src="images/PinClipart_cube_3.png";
			break;
					
		case 4:
			document.images['first'].src="images/PinClipart_cube_4.png";
			break;
						
		case 5:
			document.images['first'].src="images/PinClipart_cube_5.png";
			break;
							
		case 6:
			document.images['first'].src="images/PinClipart_cube_6.png";
			break;
									
		default:
			document.images['first'].src="images/PinClipart_cubeSet.png";
	}
}

function imageCube2 () {
	switch(num2) {
		case 1:
			document.images['second'].src="images/PinClipart_cube_1.png";
			break;
		
		case 2:
			document.images['second'].src="images/PinClipart_cube_2.png";
			break;
				
		case 3:
			document.images['second'].src="images/PinClipart_cube_3.png";
			break;
					
		case 4:
			document.images['second'].src="images/PinClipart_cube_4.png";
			break;
						
		case 5:
			document.images['second'].src="images/PinClipart_cube_5.png";
			break;
							
		case 6:
			document.images['second'].src="images/PinClipart_cube_6.png";
			break;
									
		default:
			document.images['second'].src="images/PinClipart_cubeSet.png";
	}
}


function whoWins() {
	if(proove1 === true && proove2 === true) {
		if(num1>num2) {
			document.getElementById('winner').innerHTML = "Player 1 wins!!!";
			winsPlayer1++;
		}
		
		if(num1<num2) {
			document.getElementById('winner').innerHTML = "Player 2 wins!!!";
			winsPlayer2++;
		}
		
		num1 = 0;
		num2 = 0;
		proove1 = false;
		proove2 = false;

		setTimeout(clearTries, 1500);
	}
}


function clearTries() {
	document.getElementById('erg1').innerHTML = '';
	document.getElementById('erg2').innerHTML = '';
	document.getElementById('winsPlayer1').innerHTML = "Siege: " + winsPlayer1;
	document.getElementById('winsPlayer2').innerHTML = "Siege: " + winsPlayer2;
	document.getElementById('winner').innerHTML = "";
	imageCube1();
	imageCube2();
}