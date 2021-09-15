// case 1

const setHitungMundur = (minute) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (minute < 60){
                resolve(minute)
            } else {
                reject(new Error('Salah setel hitung mundur'))
            }
        }, 2000)
    })
}

setHitungMundur(70) //minute 
    .then((response) => {
        console.log(`Hitung mundur dari menit ke ${response} berhasil dijalankan`)
    })
    .catch((error)=>{
        console.log(`${error}`)
})

// case 2

// const data = [
//     {
//         id : 2020,
//         username : 'lord',
//         password : 'Pass1'
        
//     },
//     {
//         id : 2021,
//         username : 'turtle',
//         password : 'Pass2'
        
//     },
//     {
//         id : 2022,
//         username : 'little wonder',
//         password : 'Pass3'
        
//     }
// ]


// const makeData = (params, idKey) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // membuat fungsi untuk mencari sebuah data
//             let findData = params.find((dataKey) => {
//                 return dataKey.id === idKey
//             })
//             if(findData) {
//                 resolve(findData)
//             }else {
//                 reject(new Error('Data tidak ditemukan'))
//             }
//         }, 2000);
//     })
// }

// const result = async() => {
//     try {
//         let dtr = await makeData(data, 2020);
//         console.log(dtr);
//     }   catch (error) {
//         console.log(`${error}`);
//     }
// }

// result(makeData);

