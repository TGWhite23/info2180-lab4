window.onload = function (){
	var boundary1 = document.getElementById("boundary1");
	boundary1.onmouseover = turnRed;
	
	function turnRed() {
		boundary1.classList.add("youlose");
	}
}

