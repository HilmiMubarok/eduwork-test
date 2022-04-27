// Buatlah fungsi sebagai berikut :
// Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
// Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)

function factorial(number) {
	if (number === 0) {
		return 1;
	}
	return number * factorial(number - 1);
}

console.log(factorial(4));
