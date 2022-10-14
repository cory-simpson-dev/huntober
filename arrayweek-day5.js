// take in array of X length with X primitive values each
// return array with all elements randomly shuffled
// [[1,2,3],[4,5,6],[7,8,9]] => [[8,3,5],[2,4,9],[6,7,1]]

// DIY version
function shuffleItYourself (arr) {
    // take the length of the array
    let x = arr.length
    // flatten the array to apply fisher yates shuffle
    flatArr = arr.flat()
    // Fisher-Yates
    let currentIndex = flatArr.length, randomIndex

    // while elements haven't been shuffled yet
    while(currentIndex !== 0) {
        // pick a remaining element
        randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex--;
    
    // swap it with the current element
    [flatArr[currentIndex], flatArr[randomIndex]] = [flatArr[randomIndex], flatArr[currentIndex]]
    }

    // create counter variable to keep track of position in flatArr
    let flatCount = 0
    // rejoin array
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            arr[i][j] = flatArr[flatCount]
            flatCount++
        }
    }
    console.log(arr);
    return arr
}

shuffleItYourself([[1,2,3],[4,5,6],[7,8,9]])

// Googling 2D array
// https://coder.gay/551717/shuffle-multidimensional-array-javascript-gets-duplicated

function shuffleMultiDimensionalArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let i1 = Math.floor(Math.random() * (arr.length));
            let j1 = Math.floor(Math.random() * (arr.length));

            let temp = arr[i][j];
            arr[i][j] = arr[i1][j1];
            arr[i1][j1] = temp;
        }
    }
    console.log(arr);
}

shuffleMultiDimensionalArr([[1,2,3],[4,5,6],[7,8,9]])