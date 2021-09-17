const divideAndSort = (input) => {
    if (typeof input !== 'number'){
        result = 'Input bukan angka'
    } else {
        const div = input.toString().split('0');
        const sort = div.map(e => e.split('').sort().join(''));
        result = parseInt(sort.join(''));
    }
    return result;
}
console.log(divideAndSort(5956560159466056))