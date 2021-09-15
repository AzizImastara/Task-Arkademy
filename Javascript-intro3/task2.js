const getMonth = (callback) => {
    setTimeout(() => {
        let error = true;
        let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        if(!error) {
            callback(null, month);
        }else {
            callback(new Error('sorry data not found'), [])
        }
    }, 4000);
}

getMonth((error, result) => {
    if (!error) {
        result.map((value) => {
            console.log(value)
        })
    } else {
        console.log(`${error}`)
    }
})

// true => parameter kedua
// false => parameter satu