// Dari soal nomor 6, buatlah juga untuk menghasilkan output total ada berapa angka yg termasuk dari bagian low dan high
// array data =  [1,4,7,9,12],
// int low = 2,
// int high = 15,
// maka akan menghasilkan ouput = 4

let arr = [ 1, 4, 7, 9, 12 ];
let low = 2;
let high = 15;

function findBetween(arr, low, high) {
	let result = [];
	for (let i = low; i <= high; i++) {
		if (arr.includes(i)) {
			result.push(i);
		}
	}
	return result.length;
}

console.log(findBetween(arr, low, high));
