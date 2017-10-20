window.onload = function (){	
	var boundary = document.querySelectorAll(".boundary");
	var i;
	var touchWall = 0;
	var startGame = 0;
	var endGame = 0;
	var startStatus = document.getElementById("status").innerHTML;
	var startMaze = document.getElementById("start");
	var maze = document.getElementById("maze");
	
	startMaze.onmouseover = function () {
		startGame = 1;
	}
	
	maze.onmouseleave = outOfBounds;
	
	function outOfBounds(){
		if (startGame ==1 && endGame == 0){
			for (i = 0; i < boundary.length; i++) {
				turnRed(i);
			}
		}
	}
	for (i = 0; i < boundary.length; i++) {
		boundary[i].addEventListener("mouseover",turnRed);
	}
	
	function turnRed(i) {
		if (startGame == 1 && endGame == 0){
			touchWall ++;
			for (i = 0; i < boundary.length; i++) {
				boundary[i].classList.add("youlose");
			}
			document.getElementById("status").innerHTML = "You Lose!";
		}
	}
	
	var endMaze = document.getElementById("end");		
	
	endMaze.onmouseover = youWin;	
	
	function youWin () {		
		if (startGame == 1){			
			if (touchWall == 0) {
				endGame = 1;
				document.getElementById("status").innerHTML = "You Win!";	
			}	
		}		
	}
	
	
	
	startMaze.onclick = resetMaze;
	
	function resetMaze() {
		for (i = 0; i < boundary.length; i++) {
			boundary[i].classList.remove("youlose");
		}
		document.getElementById("status").innerHTML = startStatus;
		startGame = 0;
		endGame = 0;
	}
	
	
	
	
	
}

