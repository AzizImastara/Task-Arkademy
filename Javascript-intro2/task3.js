const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal > nilaiAkhir) {
        return 'Nilai akhir harus lebih besar dari nilai awal';
    } else if (dataArray.length < 5){
        return 'Jumlah data dalam dataArray harus lebih dari 5';
    } else {
        const nilai = dataArray.filter((data) => data > nilaiAwal && data < nilaiAkhir).sort((a, b) => a - b);

        if (nilai.length === 0) 
        return 'Nilai tidak ditemukan';
        return nilai;
    }
}


// 1
console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
// 3
console.log(seleksiNilai(5, 17, [2, 25, 4]));
// 2
console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
// 4
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));