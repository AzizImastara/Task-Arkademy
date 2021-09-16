const palindrome = (text) => {
    if (typeof text !== 'string'){
        result = 'Input bukan text'
    } else {
        const rev = text.toLowerCase().split('').reverse().join('');
        if(text.toLowerCase() == rev){
            result = 'Text Palindrome';
        } else {
            result = 'Bukan Text Palindrome';
        }
    }
    return result;
}

console.log(palindrome('malam'));