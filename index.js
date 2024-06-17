const prompt = require("prompt-sync")()

const frase = "O Herói de nome "
const frase2 = " está no nível de "

let nome = prompt("Qual é o nome do seu heroi ? ")  
let xpHeroi = 0
xpHeroi = prompt("Qual é o seu valor de Xp Atual ? ")


while (xpHeroi <= 1000) {
    console.log(frase + nome + frase2 + "Ferro")
    break
} while (xpHeroi <= 2000 && xpHeroi >=1001) {
    console.log(frase + nome + frase2 + "Bronze")
    break
} while (xpHeroi <= 5000 && xpHeroi >=2001) {
    console.log(frase + nome + frase2 + "Prata")
    break
} while (xpHeroi <= 7000 && xpHeroi >=5001) {
    console.log(frase + nome + frase2 + "Ouro")
    break
} while (xpHeroi <= 8000 && xpHeroi >=7001) {
    console.log(frase + nome + frase2 + "Platina")
    break
} while (xpHeroi <= 9000 && xpHeroi >=8001) {
    console.log(frase + nome + frase2 + "Ascendente")
    break
} while (xpHeroi <= 10000 && xpHeroi >=9001) {
    console.log(frase + nome + frase2 + "Imortal")
    break
} while (xpHeroi > 10000) {
    console.log(frase + nome + frase2 + "Radiante")
    break
}