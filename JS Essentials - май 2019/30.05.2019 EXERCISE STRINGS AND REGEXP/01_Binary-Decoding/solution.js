function solve() {
	let input = document.getElementById("input").value;
	let result = document.getElementById("resultOutput");
	let sum = gerSum(input);

	function gerSum(input) {
		let sum = 0;
		let result = input;

		while (result.length > 1) {
			for (let char of result) {
				sum += +char;

			}
			result = sum.toString();
			sum = 0;
		}
		return +result;
	}
	let slicedText = input.slice(sum, input.length - sum);

	function fromBinaryToChar(binary) {
		let decimal = parseInt(binary, 2);
		let char = String.fromCharCode(decimal);
		return char;
	}
	let output = slicedText
		.split(/([\d]{8})/g)
		.filter(el => el)
		.map(el => fromBinaryToChar(el))
		.filter(el =>/[a-zA-Z ]+/g.test(el))
		.join('');
	
		result.textContent = output;


}