window.onload = function (){
	alert("hey");
	var boundary = document.querySelectorAll(".boundary");
	var i;
	
	
	for (i = 0; i < boundary.length; i++) {
		boundary[i].addEventListener("mouseover",turnRed);
	}
	
	function turnRed(i) {
		for (i = 0; i < boundary.length; i++) {
		boundary[i].classList.add("youlose");
	}
	}
}

