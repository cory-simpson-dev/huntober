// take in array of values (strings and numbers)
// return array with appropriate item moved to the left (or right)

function moveLeft (arr, value) {
    // determine current index of value
    let index = arr.indexOf(value)
    // check if already 0
    if (index === 0) {
        console.log('No change');
        return arr
    // if index is not 0
    } else {
        // hold the value that is being moved to the right
        let swapped = arr[index-1]
        // move the value to the left
        arr[index-1] = value
        // set the replaced value to the right
        arr[index] = swapped
    }
    console.log(arr);
    return arr
}

function moveRight (arr, value) {
    // determine current index of value
    let index = arr.indexOf(value)
    // check if already at end of arr
    if (index === arr.length-1) {
        console.log('No change');
        return arr
    // if index is not at end
    } else {
        // hold the value that is being moved to the right
        let swapped = arr[index+1]
        // move the value to the right
        arr[index+1] = value
        // set the replaced value to the right
        arr[index] = swapped
    }
    console.log(arr);
    return arr
}

moveLeft(['abc', 'xyz', 1, 2, 'Hey!'], 'Hey!')
moveRight(['abc', 'xyz', 1, 2, 'Hey!'], 1)

// These two could be combined with an additional conditional checking a third parameter direction with values of 'right' or 'left', but depending on how the day 7 challenge is, it may not be worth it!