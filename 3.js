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
	let res = str.replace(pattern, '');

	let result = [];
	res.toLocaleString().split('').forEach(function(item) {
		let jumlahNol = res.length - 1 - res.indexOf(item);
		let nol = '';

		for (let j = 1; j <= jumlahNol; j++) {
			nol += '0';
		}
		result.push(item + nol);
	});

	result.unshift(res);
	result = result.join('\n');

	return result;
}

console.log(onlyNumber('9.86-A5.321'));
