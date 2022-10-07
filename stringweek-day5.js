// take in string
// return 'submissions' that meet all of the rules entailed in the prompt

function soManyRules(str) {
    // make str into array
    let startingPoint = str.split(',')
    console.log(startingPoint.length)

    // first rule - no empty spaces at the start or end of the submission
    let roundOneQualified = []
    // loop through startingPoint and compare if length is same after trim()
    for (let i = 0; i<startingPoint.length; i++) {
        if (startingPoint[i].length === startingPoint[i].trim().length) {
            roundOneQualified.push(startingPoint[i])
        }
    }
    console.log(roundOneQualified.length)

    // second rule - cannot contain 'dog', 'bark', or 'bone'
    let roundTwoQualified = []
    // loop through roundOneQualified and see if toLowerCase().contains() any of the NONOs
    for (let i = 0; i<roundOneQualified.length; i++) {
        if (!roundOneQualified[i].toLowerCase().includes('dog') && !roundOneQualified[i].toLowerCase().includes('bark') && !roundOneQualified[i].toLowerCase().includes('bone')) {
            roundTwoQualified.push(roundOneQualified[i])
        }
    }
    console.log(roundTwoQualified.length)

    // third rule - length cannot be a multiple of 5 (including spaces/punctuation)
    let roundThreeQualified = []
    // loop through roundTwoQualified and see if .length%5 === 0
    for (let i = 0; i<roundTwoQualified.length; i++) {
        // extra step to determine length
        let length = roundTwoQualified[i].length
        if (length%5 !== 0) {
            roundThreeQualified.push(roundTwoQualified[i])
        }
    }
    console.log(roundThreeQualified.length)

    // fourth rule - sum of the charCodes of the 1st and last characters MUST BE ODD lmao
    let roundFourQualified = []
    // loop through roundThreeQualified and see if string.charCodeAt[0] + string.charCodeAt[string.length-1] % 2 === 1
    for (let i = 0; i<roundThreeQualified.length; i++) {
        // extra step to determine length
        let length = roundThreeQualified[i].length
        // extra step to determine sum of charCodes
        let sum = roundThreeQualified[i].charCodeAt(0) + roundThreeQualified[i].charCodeAt(length - 1)
        if (sum % 2 === 1) {
            roundFourQualified.push(roundThreeQualified[i])
        }
    }
    console.log(roundFourQualified.length)

    // fifth rule - character after middle of the string may not be e
    let roundFiveQualified = []
    // loop through roundFourQualified and see if str.charAt(Math.ceil(str[i].length/2)) === 'e'
    for (let i = 0; i<roundFourQualified.length; i++) {
        // extra step to determine midpoint of string
        let midpoint = Math.ceil(roundFourQualified[i].length/2)
        if (roundFourQualified[i].charAt(midpoint) !== 'e') {
            roundFiveQualified.push(roundFourQualified[i])
        }
    } 
    console.log(roundFiveQualified.length)

    // sixth rule - must have an even number of lowercase letters (not counting punctuation || spaces)
    let roundSixQualified = []
    // loop through roundFiveQualified and check against lowercase alphabet, tallying up, then check if its even
    for (let i = 0; i<roundFiveQualified.length; i++) {
        // extra step to create alphabet
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'
        // extra step to tally up
        let tallyOfLowercase = 0
        // loop through length of submission
        for (let j = 0; j < roundFiveQualified[i].length; j++) {
            if (alphabet.includes(roundFiveQualified[i][j])) {
                tallyOfLowercase += 1
            }
        }
        // check if tally is even
        if (tallyOfLowercase % 2 === 0) {
            roundSixQualified.push(roundFiveQualified[i])
        }
    } 
    console.log(roundSixQualified.length)

    // seventh rule - must have at least 2 capital letters
    let roundSevenQualified = []
    // loop through roundSixQualified and check against uppercase alphabet, talling up, and check if >= 2
    for (let i = 0; i<roundSixQualified.length; i++) {
        // extra step to create alphabet
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        // extra step to tally up
        let tallyOfUppercase = 0
        // loop through length of submission
        for (let j = 0; j < roundSixQualified[i].length; j++) {
            if (alphabet.includes(roundSixQualified[i][j])) {
                tallyOfUppercase += 1
            }
        }
        // check if tally is >= 2
        if (tallyOfUppercase >= 2) {
            roundSevenQualified.push(roundSixQualified[i])
        }
    } 
    console.log(roundSevenQualified.length)

    // eigth and FINAL rule - must not contain a capital 'S'
    let roundEightQualified = []
    // loop through roundSevenQualified and check if it includes 'S'
    for (let i = 0; i<roundSevenQualified.length; i++) {
        if (!roundSevenQualified[i].includes('S')) {
            roundEightQualified.push(roundSevenQualified[i])
        }
    }
    console.log(roundEightQualified.length)


    console.log(roundEightQualified)
    return roundEightQualified
}

soManyRules("The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
)