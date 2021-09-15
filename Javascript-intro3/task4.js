// Memanggil data dari url
fetch('https://jsonplaceholder.typicode.com/users')
    // mereturn json
    .then((response) => response.json())
    // melakukan pencarian dengan .map() ditiap data
    .then((result) => result.map((data) =>
        console.log(data.name)))
    .catch((error) => 
        console.log(`${error}`));