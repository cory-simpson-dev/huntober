// take in string
// return string reversed with all white space preserved

function reversingStr(str) {
    return str.split('').reverse().join('')
}

// The alternative approach
function alternativeReverse(str) {
    let reversed = ''
    // loop through backwards
    for (let i = str.length-1; i > 0; i--) {
        reversed += `${str[i]}`
    }
    return reversed
}

let testingThisReverse = reversingStr("   The white space at the beginning of this string doesn't match the whitespace at the end. ")
console.log(testingThisReverse);

// side note - this was my first ever codewars challenge, and I obliterated an hour to figure it out