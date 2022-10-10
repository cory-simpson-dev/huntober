// take in string
// return string with letters replaced by letter from opposite side of the alphabet (and opposite casing)
// 'p'  // 16th letter of the alphabet, lowercase => 'K'  // 16th letter from *end* of alphabet, uppercase

// this is an unnecessarily convoluted way of doing it in order to emulate a similar scenario without knowing that we are working with a perfectly ordered alphabet
function backAndForth(str) {
    // create alphabet arrays, caps and lowercase
    let lowercase = 'abcdefghijklmnopqrstuvwxyz'
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // create answer string
    let answer = ''
    // loop through input string and see if the letter is included in either list
    for (let i = 0; i < str.length; i++) {
        // if the current letter is in the lowercase string
        if (lowercase.includes(str[i])) {
            // find the index of it
            let lowercaseIndex = lowercase.indexOf(str[i])
            // find the corresponding index of the uppercase string
            let oppositeUppercaseIndex = uppercase.length - 1 - lowercaseIndex
            // add the character at the oppositeUppercaseIndex to the answer string
            answer += `${uppercase.charAt(oppositeUppercaseIndex)}`
        // check if the current letter is in the uppercase string
        } else if (uppercase.includes(str[i])) {
            // find the index of it
            let uppercaseIndex = uppercase.indexOf(str[i])
            // find the corresponding index of the lowercase string
            let oppositeLowercaseIndex = lowercase.length - 1 - uppercaseIndex
            // add the character at the oppositeLowercaseIndex to the answer string
            answer += `${lowercase.charAt(oppositeLowercaseIndex)}`
            // if not in upper || lowercase string, then just add the character directly
        } else {
            answer += `${str[i]}`
        }
    }
    console.log(answer)
}

backAndForth('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH')

const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

// DECRYPTING WEEK 1 MESSAGE (not exporting/importing from other files so that others can still use the code)

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

function keysWorkSometimes (str, keys) {
    // create your key array (see day 2 for the accurate key)
    // *note: I am not using split/join here because the space at the beginning of the string could be significant for the final day of string week*
    let unlocked = str
    // loop through length of key and use .replaceAll in str
    for (let i = 0; i<keys.length; i++) {
        unlocked = unlocked.replaceAll(keys[i], ' ')
    }
    return unlocked
}

function reversingStr(str) {
    return str.split('').reverse().join('')
}

function removeTheClutter(str, clutterMagnet) {
    let counter = 0
    let cleanStr = ''
    // create a loop to and check if counter is at clutterMagnet increment
    for (let i = 0; i < str.length; i++) {
        counter += 1
        if (counter % clutterMagnet === 0) {
            cleanStr += ''
        } else {
            cleanStr += str[i]
        }
    }
    return cleanStr;
}

// day 2 = 'Space'
let key = 'Space'
// day 5 = length of 3
let length = 3

backAndForth(removeTheClutter(reversingStr(keysWorkSometimes(decodeString(encryptedMsg), key)), length))