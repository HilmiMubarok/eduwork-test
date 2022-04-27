// Buatlah fungsi untuk reverse sebuah string
// Apabila input = “abcde”, maka outputnya = “edcba”
// Dilarang menggunakan function reverse, buatlah logika sendiri

function reverseString(str) {
	if (str === '') {
		return str;
	}

	let length = str.length;

	return str.substr(-1) + reverseString(str.substr(0, length - 1));
}

console.log(reverseString('abcde'));
