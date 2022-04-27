// Jika angka tahun itu habis dibagi 400, maka tahun itu sudah pasti tahun kabisat.
// Jika angka tahun itu tidak habis dibagi 400 tetapi habis dibagi 100, maka tahun itu sudah pasti bukan merupakan tahun kabisat.
// Jika angka tahun itu tidak habis dibagi 400, tidak habis dibagi 100 akan tetapi habis dibagi 4, maka tahun itu merupakan tahun kabisat.
// Jika angka tahun tidak habis dibagi 400, tidak habis dibagi 100, dan tidak habis dibagi 4, maka tahun tersebut bukan merupakan tahun kabisat.

// ^^ source wikipedia

function tahunKabisat(tahun) {
	if (tahun % 4 == 0) {
		if (tahun % 100 == 0) {
			if (tahun % 400 == 0) {
				return 'Tahun ' + tahun + ' adalah tahun kabisat';
			} else {
				return 'Tahun ' + tahun + ' bukan tahun kabisat';
			}
		} else {
			return 'Tahun ' + tahun + ' adalah tahun kabisat';
		}
	} else {
		return 'Tahun ' + tahun + ' bukan tahun kabisat';
	}
}

console.log(tahunKabisat(2021));
console.log(tahunKabisat(2024));
