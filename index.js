const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassEl = document.getElementById("first-pass")
let secondPassEl = document.getElementById("second-pass")
//console.log(secondPassEl)


let passlength = 15
let randomCharacters1 = []
let randomCharacters2 = []

function generatePassword(){
    firstPass() + secondPass()
}

function firstPass() {
    //creates random Index
    let randomNumber1 = Math.floor(Math.random() * characters.length)
    
    //picks up generated character
    let generatedCharacter1 = characters[randomNumber1]
    
    //creates Array of random characters
    randomCharacters1.push(generatedCharacter1)
    if (randomCharacters1.length < passlength) {
        firstPass()
    }
     else if (randomCharacters1 === passlength) {
         return randomCharacters1
     } else {
         return "have a nice day!"
     }
     firstPassEl.textContent = randomCharacters1.join("")
}

function secondPass() {
    //creates random Index
    let randomNumber2 = Math.floor(Math.random() * characters.length)
    
    //picks up generated character
    let generatedCharacter2 = characters[randomNumber2]
    
    //creates Array of random characters   
    randomCharacters2.push(generatedCharacter2)
    if (randomCharacters2.length < passlength) {
        secondPass()
    }
     else if (randomCharacters2 === passlength) {
         return randomCharacters2
     } else {
         return "have a nice day!"
     }
     secondPassEl.textContent = randomCharacters2.join("")
}



