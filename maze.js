window.onload = function (){
	alert("hey");
	var boundary = document.querySelectorAll(".boundary");
	var i;
	var touchWall = 0;
	
	
	for (i = 0; i < boundary.length; i++) {
		boundary[i].addEventListener("mouseover",turnRed);
	}
	
	function turnRed(i) {
		touchWall ++;
		for (i = 0; i < boundary.length; i++) {
		boundary[i].classList.add("youlose");
		}
		document.getElementById("status").innerHTML = "You Lose!";
	}
	
	var endMaze = document.getElementById("end");		
	
	endMaze.onmouseover = youWin;	
	
	function youWin () {
		if (touchWall == 0) {
		document.getElementById("status").innerHTML = "You Win!";;		
		}		
	}
	
	var startMaze = document.getElementById("start");
	
	startMaze.onclick = resetMaze;
	
	function resetMaze() {
		for (i = 0; i < boundary.length; i++) {
		boundary[i].classList.remove("youlose");
	}
	}
	
	
	
	
}

