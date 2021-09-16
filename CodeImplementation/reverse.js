const reverseWords = (input) => {
    const words = input.split(' ') // ['Saya', 'Belajar', 'Javascript']
    const revWords = words.reverse() // ['Javascript', 'Belajar', 'Saya']
    return revWords.join(' ')
}
console.log(reverseWords('Saya Belajar Javascript'));