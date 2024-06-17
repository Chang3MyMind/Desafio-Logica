const prompt = require("prompt-sync")()

const frase = " está no nível de "
const frase2 = "O Herói de nome "
let nome = prompt("Qual é o nome do seu heroi ? ")  
let xpHeroi = 0
xpHeroi = prompt("Qual é o seu valor de Xp Atual?")

while (xpHeroi < 1000) {
    console.log(frase + nome + frase2 + "Ferro")
} while (xpHeroi <= 2000) {
    console.log(frase + nome + frase2 + "Bronze")
} while (xpHeroi <= 5000) {
    console.log(frase + nome + frase2 + "Prata")
} while (xpHeroi <= 7000) {
    console.log(frase + nome + frase2 + "Ouro")
} while (xpHeroi <= 8000) {
    console.log(frase + nome + frase2 + "Platina")
} while (xpHeroi <= 9000) {
    console.log(frase + nome + frase2 + "Ascendente")
} while (xpHeroi <= 10000) {
    console.log(frase + nome + frase2 + "Imortal")
} while (xpHeroi > 10000) {
    console.log(frase + nome + frase2 + "Radiante")
}