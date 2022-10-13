// take in array of X number arrays all length X && take in given value that only appears once
// return the array of arrays with the value swapped into the same position to the array to the left (up) or right (down)
// moveUp([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']], 'h') => [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]
// moveDown([['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']], 'f') => [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

function moveUp(arr, value) {
    // loop through array
    for (let i = 0; i<arr.length; i++) {
        // if arr.includes(value), check if i === 0 && return existing array
        if (arr[i].includes(value)) {
            if (i === 0) {
                console.log(arr)
                return arr
            // otherwise, take the index of the value in that array
            } else {
                let index = arr[i].indexOf(value)
                // take value of the previous array at same position
                let temp = arr[i-1][index]
                // place the value into new position
                arr[i-1][index] = value
                // place the temp value
                arr[i][index] = temp
                console.log(arr);
                return arr
            }
        } 
    }
}

function moveDown(arr, value) {
    // loop through array
    for (let i = 0; i<arr.length; i++) {
        // if arr.includes(value), check if i === arr.length-1 && return existing array
        if (arr[i].includes(value)) {
            if (i === arr.length-1) {
                console.log(arr)
                return arr
            // otherwise, take the index of the value in that array
            } else {
                let index = arr[i].indexOf(value)
                // take value of the next array at same position
                let temp = arr[i+1][index]
                // place the value into new position
                arr[i+1][index] = value
                // place the temp value
                arr[i][index] = temp
                console.log(arr);
                return arr
            }
        } 
    }
}

moveUp([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']], 'd')
moveDown([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']], 'd')