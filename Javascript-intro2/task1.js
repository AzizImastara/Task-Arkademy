// 10 Method Javascript

// 1. toLowerCase() digunakan untuk mengubah semua karakter menjadi huruf kecil
const str = 'HELLO';
const low = str.toLowerCase();
console.log(low);

// 2. toUpperCase() digunakan untuk mengubah semua karakter menjadi huruf besar
const src = 'hello';
const up = src.toUpperCase();
console.log(up);

// 3. charAt() digunakan untuk mengembalikan karakter pada indeks tertentu dalam sebuah string
const char = 'Hello';
console.log(char.charAt(0));
console.log(char.charAt(1));

// 4. filter() digunakan untuk membuat array baru dengan semua nilai yang lolos
const price = [10, 15, 20, 30, 35, 40]
const filterPrice = price.filter((price) => price > 25)
console.log(filterPrice)

// 5. find() digunakan untuk mengembalikan nilai dari elemen pertama dalam array yang lolos
const num = [5, 10, 15];
const checkNum = num.find((num) => num > 12);
console.log(checkNum);

// 6. some() digunakan untuk mengembalikan nilai true jika setidaknya satu elemen dalam larik memenuhi fungsi pengujian yang disediakan
const age = [15, 16, 17, 18, 19];
const checkAge = age.some(age => age < 17);
console.log(checkAge);

// 7. repeat() digunakan untuk mengulangi sebuah string
const string = ' Hai !';
console.log(string.repeat(2));

// 8. sort() digunakan mengurutkan elemen dalam sebuah array
const no = [20, 13, 17, 1, 90];
console.log(no.sort());

// 9. map() digunakan untuk merubah semua elemen didalam suatu array menjadi elemen dengan nilai yang baru
const angka = [1, 2, 4, 20];
const newAngka = angka.map(a => a * 2);
console.log(newAngka);

// `10. reduce() digunakan untuk mengakumulasikan nilai berdasarkan elemen didalam array
const newsAngka = [1, 2, 5, 10];
const sum = newsAngka.filter(a => a > 3) // 5, 10
    .map (a => a * 2) // 10, 20
    .reduce ((acc, cur) => acc * cur);
console.log(sum);