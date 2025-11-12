//Lectura de variables a trabajar

const botonGenerar = document.querySelector("#generate")
const passwordText = document.querySelector("#password > p")
const characterLength = document.querySelector("#range_length")

// Variables de entrada
    const uppercase = document.querySelector("#uppercase")
    const lowercase = document.querySelector("#lowercase")
    const numbers = document.querySelector("#numbers")
    const symbols = document.querySelector("#symbols")

let genPassword = ""

botonGenerar.addEventListener("click", () => {
    let genPassword = ""
    const lowerTextletters = "abcdefghijklmnopqrstuvwxyz"
    const upperTextLetters = lowerTextletters.toUpperCase()
    const numberinc = "0123456789"
    const sybols = "!$%&?@"
    let totalValues = ""

    if (uppercase.checked) {
        totalValues = totalValues + upperTextLetters
    }

    if (lowercase.checked) {
        totalValues = totalValues + lowerTextletters
    }
    
    if (numbers.checked) {
        totalValues = totalValues + numberinc
    }
    if (symbols.checked) {
        totalValues = totalValues + sybols
    }
    
    passwordText.textContent = genPassword

    for (let i=0; i< characterLength.value; i++) {
        const randomIndex =  parseInt(Math.random()*Number(totalValues.length))
        genPassword = genPassword + totalValues [randomIndex]
    
    }
    
    passwordText.textContent = genPassword

})
