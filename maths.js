// // // f(x) = 2x + 1

function f(x) {
	var answer = 2*x + 1;
	return answer
}
var output = f(11);
console.log("the answer is " + output + " ! I'm certain the answer is " + output);

// // // g() = 5

	function g() {
		var g_answer = 5;
		return g_answer;
	}
	console.log(g ());


// // // h(x) = 3x - 2

	function h(x){
		var h_answer = 3*x - 2; 
		return h_answer;
	}
	console.log(h(2));

// // Write a function that takes two arguments and returns double their sum.

	function doubleSum (x,y) {
		var answer = (x+y)*2;
		return answer;
	}

	var output = doubleSum (5, 8); 
	console.log (output);

// // a(x, y, z) = 5x + 2y - 3z + 7

	function a (x, y, z) {
		var a_answer = 5*x + 2*y - 3*z + 7;
		return a_answer;
	}
	console.log(a(2, 4, 6));


// b(x, y, z) = h(x) + h(y) + a(x, y, z)

	function b (x, y, z){
		var b_answer = h(x) + h(y) + a(x, y, z);
		return b_answer;
	}

	console.log(b(1, 2, 3));



// Pythagoras in JavaScript

	function pythagoras (a, b){
				function square  (x) {
					var answer = x*x;
					return answer;
				}
		var aSquared = square(a);
		var bSquared = square (b);
		var answer = Math.sqrt (aSquared + bSquared);
		return answer;
	}

	console.log (pythagoras(3,4));


// Write a function which takes a string and returns it concatenated with itself three times. Example: "hi" -> "hihihi"

	function hi() {
		var str = "Hi";
		str.repeat (3); 
	console.log (hi())

// Come up with two more of your own original function ideas, one working with numbers, another working with strings!

function tan ()














































