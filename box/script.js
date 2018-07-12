for (var i =0; i <300; i++) {
	document.querySelector(".container").innerHTML += "<div class= 'box'></box>";
}

var arrOfBoxes = document.querySelectorAll(".box");
	for(var i = 0; i < arrOfBoxes.length; i++){
		if (i % 2 === 0){
			arrOfBoxes [i].style.background = "crimson";
		}
	}