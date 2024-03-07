function verificaSeOChutePossuiUmValorValido (chute) {
    const numero = +chute; 

    if (seChuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido.</div>';
    }

    if (numeroForMaiorOuMenosQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido. O Número Secreto precisa estar entre ${menorValor} e ${maiorValor}.</div>`
        return
    } 

    if (numero === numeroSecreto) {
        document.body.innerHTML = `<h2>Você acertou!</h2><h3>O Número Secreto é ${numeroSecreto}.</h3><br><br><div><button id="jogar-novamente" class="jogar-outra-vez">Reiniciar jogo.</button></div>`
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O Número Secreto é menor <i class="fa-solid fa-arrow-down"></i>.</div>`
    } else {
        elementoChute.innerHTML += `<div>O Número Secreto é maior <i class="fa-solid fa-arrow-up"></i>.</div>`
    }
}

function seChuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenosQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener ('click', e => {
    if (e.target.id = 'jogar-novamente') {
        window.location.reload ()
    }
})
