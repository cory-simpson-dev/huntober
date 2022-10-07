// Take in string with improper characters (numbers/letters)
// Return string with appropriate characters swapped (i.e. 0 <-> O, 4 <-> h, etc)
// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." -> "PRO-TIP #498: IT'S NICE TO SAY HELLO."

function decodeString(str) {
    let numbersArr = '0123456789'.split('')
    let lettersArr = 'OIZEhSGLBq'.split('')
    let answerStr = ''
    // loop through length of input string
    for (let i = 0; i < str.length; i++) {
        // loop through numbersArr & lettersArr together
        for (let j = 0; j < numbersArr.length; j++) {
            // check if current letter in str is included in numbersArr || lettersArr
            if (numbersArr[j] === str[i]) {
                answerStr += `${lettersArr[j]}`
            } else if (lettersArr[j] === str[i]) {
                answerStr += `${numbersArr[j]}`
            }
        }
        // check if answerStr had a new letter assigned, else, add the current letter
        if (answerStr.length === i) {
            answerStr += `${str[i]}`
        }
    }
    return answerStr
}

let answer = decodeString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")
console.log(answer);