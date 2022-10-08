// take in two arrays
// return true/false if they match

function matchingArrays(arr1, arr2) {
    // flatten each array (to save us a loop) && make into a string
    let flatArr1 = arr1.flat().join('')
    let flatArr2 = arr2.flat().join('')
    // set up a check to see if they are entirely equal
    console.log((flatArr1 === flatArr2)); 
    return (flatArr1 === flatArr2)
}

const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

matchingArrays(arr1, arr2)
matchingArrays(arr1, arr3)
matchingArrays(arr1, arr4)