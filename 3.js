// Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau tempat dari angka dalam sebuah string “9.86-A5.321”!
// Contoh: printDigitValue(‘9.86-A5.321’);
// Hasil :
// 9865321
// 9000000
// 800000
// 60000
// 5000
// 300
// 20
// 1

function onlyNumber(str) {
	let pattern = /\D/g;

	return str.replace(pattern, '');
}

console.log(onlyNumber('‘9.86-A5.321’'));
