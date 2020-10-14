function convertTextToBinary() {
	var output = document.getElementById('inputB');
	var input = document.getElementById('inputA').value;
	output.value = '';
	for (i = 0; i < input.length; i++) {
		output.value +=
			input[i].charCodeAt(0).toString(2) + ' ';
	}
}

function convertBinaryToText() {
	// var output = document.getElementById('inputB');
	// var input = document.getElementById('inputA').value;
	// output.value = '';
	// for (i = 0; i < input.length; i++) {
	// 	output.value +=
	// 		input[i].charCodeAt(0).toString(2) + ' ';
	// }
	// 
}
