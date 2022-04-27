// Buatlah fungsi sebagai berikut :
// int : 4, maka outputnya adalah : empat
// int : 20, maka outputnya adalah : dua puluh
// int : 39, maka outputnya adalah : tiga puluh sembilan
// int : 104, maka outputnya adalah : silahkan masukkan bilangan 1-100

function terbilang(number) {
	let bilangan = [
		'',
		'satu',
		'dua',
		'tiga',
		'empat',
		'lima',
		'enam',
		'tujuh',
		'delapan',
		'sembilan',
		'sepuluh',
		'sebelas'
	];
	if (number < 12) {
		return bilangan[number];
	} else if (number < 20) {
		return bilangan[number - 10] + ' belas';
	} else if (number < 100) {
		return bilangan[Math.floor(number / 10)] + ' puluh ' + bilangan[number % 10];
	} else if (number == 100) {
		return 'seratus ';
	} else {
		return 'Silahkan masukkan bilangan 1-100';
	}
}

console.log(terbilang(4));
console.log(terbilang(20));
console.log(terbilang(39));
console.log(terbilang(100));
console.log(terbilang(104));
