let qtdeVitoria 
let qtdeDerrota 
let resultadoVitoria

calcularVitorias(300,15)
calcularNivelJogador()

function calcularVitorias(qtdeVitoria, qtdeDerrota) {
    resultadoVitoria = qtdeVitoria - qtdeDerrota;
    return resultadoVitoria
}

function calcularNivelJogador() {
    if (resultadoVitoria < 10) {
        nivel = "Ferro";
    } else if (resultadoVitoria <= 20) {
        nivel = "Bronze"
    } else if (resultadoVitoria <= 50) {
        nivel = "Prata"
    } else if (resultadoVitoria <= 80) {
        nivel = "Ouro"
    } else if (resultadoVitoria <= 90) {
        cnivel = "Diamante"
    } else if (resultadoVitoria <= 100) {
        cnivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

}

console.log(`O Herói tem saldo de  ${resultadoVitoria} está no nível de ${nivel}`)