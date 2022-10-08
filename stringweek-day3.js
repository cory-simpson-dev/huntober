// take in string
// return string with key characters replaced by a space ' '

// create your key string (see day 2 for the accurate key)
let key = 'A_KEY!'

function keysWorkSometimes (str, keys) {
    // *note: I am not using split/join here because the space at the beginning of the string could be significant for the final day of string week*
    let unlocked = str
    // loop through length of key and use .replaceAll in str
    for (let i = 0; i<keys.length; i++) {
        unlocked = unlocked.replaceAll(keys[i], ' ')
    }
    return unlocked
}

let whatsTheRealKeyThough = keysWorkSometimes('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters', key)
console.log(whatsTheRealKeyThough)