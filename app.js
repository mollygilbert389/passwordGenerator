let passwordChoiceLengthSpace = document.querySelector('#passWordLengthChoice')
let specialCharacterChoice = document.querySelector('#specialCharacterChoice')
let passWordSpace = document.querySelector('#passWordSpace')
let passwordChoiceLength;

function generatePassword(event) {
    event.preventDefault()

    passwordChoiceLength = parseInt(passwordChoiceLengthSpace.value)
   
     console.log(passwordChoiceLength)
    if (passwordChoiceLength >= 8 && passwordChoiceLength <= 128 && passwordChoiceLength !== NaN) {
        createRandomPassword(passwordChoiceLength)
    }
    else {
        alert("Please enter a number in the specified range.")
        location.reload()
    }
}

function randomizer(array) {
    let numberArray = []

    for(var i = 0; i < passwordChoiceLength; i++) {
        numberArray.push('');
        }

    array.sort(function() {
        return .5 - Math.random();
    });

    let num = numberArray.length

    numberArray = array.slice(0, num)
    let finalPassword = numberArray.toString()
    const regex = /,/gi
    finalPassword = finalPassword.replace(regex, '')

    passWordSpace.innerText = finalPassword
}

function createRandomPassword() {

    let defaultCheck1 = document.querySelector("#defaultCheck1:checked")
    let defaultCheck2 = document.querySelector("#defaultCheck2:checked")

    if (defaultCheck1 !== null ){
    defaultCheck1 = true
    } else {
        defaultCheck1 = false
    }

    if (defaultCheck2 !== null){
        defaultCheck2 = true
        } else {
        defaultCheck2 = false
     }

    if (defaultCheck1 && defaultCheck2) {
        let masterAbc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!', '@', '#', '$', '%', '^' , '*', '(', ')', '+', '=', '"', "'", '~', '`','?','<','>','/', '0','1','2','3','4','5','6','7','8','9']
        randomizer(masterAbc)

    } else if (defaultCheck1) {
        let specialArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!', '@', '#', '$', '%', '^' , '*', '(', ')', '+', '=', '"', "'", '~', '`','?','<','>','/', '0','1','2','3','4','5','6','7','8','9']

        randomizer(specialArray)

    } else if (defaultCheck2) {
        let upperCaseAbc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']

        randomizer(upperCaseAbc)
    } else {
        let defaultArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
        randomizer(defaultArray)
    }

    document.getElementById("myForm").reset() 
}


