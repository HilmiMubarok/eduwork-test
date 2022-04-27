// Buatlah fungsi untuk reverse sebuah string
// Apabila input = “abcde”, maka outputnya = “edcba”
// Dilarang menggunakan function reverse, buatlah logika sendiri

function reverseString(str) {
	let result = '';
	for (let i = 0; i < str.length; i++) {
		result = str[i] + result;
	}

	return result;
}

console.log(reverseString('abcde'));
