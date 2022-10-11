// take in array of strings
// move any entries containing the letter 'a' to the front and then move any entries with > 3 characters to the back
// ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy'] => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

function moveThingsAround (arr) {
    // create a counter variable to keep track of how many items we moved to the front
    let frontCount = 0
    // loop forwards through the array to hit each element as they are added to the front
    for (let i = 0; i < arr.length; i++) {
        // for each item, see if it contains the letter a
        if (arr[i].includes('a')) {
            // grab the value
            let transport = arr[i]
            // splice the arr to remove the element from the array
            arr.splice(i, 1)
            // splice the transport back into the front of the array based on the frontCount
            arr.splice(frontCount, 0, transport)
            // increase the count
            frontCount++
        }

    }

    // create a counter variable to keep track of how many items we moved to the back
    let backCount = arr.length - 1
    // now that the entries with 'a' have been moved to the front, we can loop through from the back of the array and splice/push the entries with > 3 characters
    for (let i = arr.length - 1; i > frontCount; i--) {
        // check if length > 3
        if (arr[i].length > 3) {
            // grab the value
            let transport = arr[i]
            // splice the arr to remove the element from the array
            arr.splice(i,1)
            // splice the transport back into the front of the array based on the frontCount
            arr.splice(backCount, 0, transport)
            // reduce the count
            backCount--
        }

    }

    console.log(arr)
    return arr
}

moveThingsAround(['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy'])