const str = `
010-1234-5678
thefirst@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
the quick brown fox jumps over the lazy dog.
abbcccdddd
`

const regexp = new RegExp('the', 'gi')
const regxp = /the/gi
console.log(str.match(regexp))