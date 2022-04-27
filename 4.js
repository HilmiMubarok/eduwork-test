// Ketik kode untuk swap 2 integer variables tanpa VARIABLE TAMBAHAN
// Contoh : let a = 3, let b = 7 => hasilnya a = 7, b = 3

function swap(a, b) {
	a = a + b;
	b = a - b;
	a = a - b;

	return [ a, b ];
}

let a = 3;
let b = 7;
console.log(swap(a, b));
