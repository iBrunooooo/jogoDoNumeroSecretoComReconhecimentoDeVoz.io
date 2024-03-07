const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio ();
const elementoMenorValor = document.getElementById ('menor-valor');
elementoMenorValor.textContent = menorValor; 
const elementoMaiorValor = document.getElementById ('maior-valor');
elementoMaiorValor.textContent = maiorValor; 


function gerarNumeroAleatorio () {
    return parseInt (Math.random () * maiorValor + 1);
}

console.log (numeroSecreto);