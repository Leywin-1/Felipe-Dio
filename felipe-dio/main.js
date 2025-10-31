const min = 0;
const max = 10001;''
let nivel = null
const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
const nome = "Leywin" 
if (numeroAleatorio < 1000) {
    nivel = "Ferro"
}
else if (numeroAleatorio > 1000 && numeroAleatorio <= 2000) {
    nivel = "Bronze"
}
else if (numeroAleatorio > 2000 && numeroAleatorio <= 5000) {
    nivel = "Prata"
}
else if (numeroAleatorio > 5000 && numeroAleatorio <= 7000) {
    nivel = "Ouro"
}
else if (numeroAleatorio > 7000 && numeroAleatorio <= 8000) {
    nivel = "Platina"
}
else if (numeroAleatorio > 8000 && numeroAleatorio <= 9000) {
    nivel = "Ascendente"
}
else if (numeroAleatorio > 9000 && numeroAleatorio <= 10000) {
    nivel = "Imortal"
}
else {
    nivel = "Radiante"
}
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)

// Se XP for menor do que 1.000 = Ferro 
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante