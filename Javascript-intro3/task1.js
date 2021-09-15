const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            }else {
                reject(new Error('hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

// THEN CATCH

// Ketika parameter yang di isi pada function dinyatakan cocok
// maka akan menjalankan .then sebaliknya jika tidak cocok maka akan menjalankan .catch
// cekHariKerja('selasa')
//     .then((response) => {
//         console.log(response); //kasus berhasil
//     })  
//     .catch((error) => {
//         console.log(`${error}`); //kasus eror/ditolak
// })

// TRY CATCH

// Untuk menjalankan try catch, function harus bersifat async dan terdapat await untuk mendapatkan value dari promise
const resultDay = async() => {
    try {
        const result = await cekHariKerja('minggu');
        console.log(result);
    } catch (error) {
        console.log(`${error}`);
    }
}
resultDay();

