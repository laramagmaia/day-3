// if (10 < 5) {
// 	console.log ("math works"); 
// } else {
// 	console.log ("the condition was false")
// }

// Write a function which takes one argument and returns "BIG!" if the number is bigger than 10, and "small" otherwise
	function size (x){
		if (x>10) {
			console.log ("BIG!");
		} else if (x < 10) {
			console.log("small");
		}
	}
 size (11);
		

// Write a function which takes one argument and returns "negative" if the number is below zero, "positive" if the number is above zero, and "zero" if the number is zero.
	
	function sign (n) {
		if (n<0) {
			return "negative";
		} else if (n>0) {
			return "positive";
		} else if(n === 0) {
			return "zero";
		} 
	}

	console.log (sign (2));
	sign (-1);
	sign (0); 

// Write a function that takes two arguments and returns "same" if the arguments are the same, "different" if the arguments are different.

function difference (a, b) {
	if (a === b) {
		console.log("same");
	} else {
		console.log("different");
	}
}

console.log(difference(10,11));

// Challenge: try solving some the first few Project Euler problems.