// take in string and an integer
// return string with every xth character removed
// ("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!", 4) => "This is Halloween! This is Halloween!"

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
    console.log(cleanStr);
}

removeTheClutter("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!", 4)
removeTheClutter("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5)