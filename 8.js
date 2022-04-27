// Apabila terdapat int = 15, maka akan mencetak output berikut :
// 1
// 2
// Edu
// 4
// Work
// 6
// 7
// 8
// Edu
// 10
// 11
// Edu
// 13
// 14
// EduWork
// keterangan : string edu untuk kelipatan 3,
// string work untuk kelipatan 5,
// string eduwork untuk kelipatan 3 dan 5

let int = 15;

function test(length) {
	var result = '';
	for (var i = 1; i <= length; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			result += 'EduWork\n';
		} else if (i % 3 === 0) {
			result += 'Edu\n';
		} else if (i % 5 === 0) {
			result += 'work\n';
		} else {
			result += i + '\n';
		}
	}
	return result;
}

console.log(test(int));
