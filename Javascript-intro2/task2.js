// Program searching nama
const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

const searchName = (keywoard, limit, callback) => {
    // keywoard menjadi lowercase supaya menghiraukan case sensitif
    // case sensitif menganggap setara huruf besar dan huruf kecil 
    // indexOf() mengembalikan angka
    const arrFilter = names.filter(e => e.toLowerCase().indexOf(keywoard) !== -1);
    let arrResult = [];
    // Proses limit data menggunakan looping
    for(let i = 0; i <= arrFilter.length-1; i++){
        if((i+1) <= limit){
            arrResult.push(arrFilter[i]);
        }
    }
    callback(arrResult);
}
// Proses output data
const callback = (result) => {
    console.log(result);
}

searchName('an', 3, callback);