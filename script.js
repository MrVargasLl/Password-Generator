//Lectura de variables a trabajar

const botonGenerar = document.querySelector("#generate")
const passwordText = document.querySelector("#password > p")
const characterLength = document.querySelector("#range_length")
const textRangeLength = document.querySelector("#rangeValue")
const fortaleza = document.querySelector("#Fortaleza")
const element = document.querySelector("#strengthIndicator")
const copyPassword = document.querySelector("#copyPassword")

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
    let strengh = 0

    if (uppercase.checked) {
        totalValues = totalValues + upperTextLetters
        strengh=strengh + 1;
    }

    if (lowercase.checked) {
        totalValues = totalValues + lowerTextletters
        strengh++;
    }
    
    if (numbers.checked) {
        totalValues = totalValues + numberinc
        strengh++;
    }
    if (symbols.checked) {
        totalValues = totalValues + sybols
        strengh++;
    }
    
    passwordText.textContent = genPassword
    globalPassword = genPassword

    for (let i=0; i< characterLength.value; i++) {
        const randomIndex =  parseInt(Math.random()*Number(totalValues.length))
        genPassword = genPassword + totalValues [randomIndex]
        }
    
    const dificultad = {
        1: "Very Weak",
        2: "Weak",
        3: "Medium",
        4: "Strong"}

        fortaleza.textContent = dificultad[strengh]
        
        
        element.classList.remove("veryweak", "weak", "medium", "strong");

// Luego asignamos según el valor de `strength`
if (strengh === 0 || strengh === 1) {
    element.classList.add("veryweak");
}
else if (strengh === 2) {
    element.classList.add("weak");
}
else if (strengh === 3) {
    element.classList.add("medium");
}
else if (strengh === 4) {
    element.classList.add("strong");
}


    passwordText.textContent = genPassword

})

//Visualizar Longitud de caracteres

characterLength.addEventListener("change", () => {
    textRangeLength.textContent = characterLength.value;
})

    copyPassword.addEventListener("click", () => {
    const textToCopy = passwordText.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        
        //alert("texto copiado en el portapapeles")
    })
})