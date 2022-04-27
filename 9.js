// Buatlah fungsi untuk menentukan bilangan terkecil dan terbesar dari sebuah array
// Contoh : array [4,2,6,88,3,11]
// Maka outputnya adalah low : 2, high : 88
// dilarang menggunakan built in function

let arr = [ 4, 2, 6, 88, 3, 11 ];

function getLower(arr) {
	let low = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < low) {
			low = arr[i];
		}
	}
	return low;
}

function getHigher(arr) {
	let high = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > high) {
			high = arr[i];
		}
	}
	return high;
}

console.log(getLower(arr));
console.log(getHigher(arr));
