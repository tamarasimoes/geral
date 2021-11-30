//funções

let nome;
function saudacao(nome) {
    console.log('Bom dia, ' + nome);
};

saudacao('Alef');
saudacao('Tamara');

function somar(a, b) {
    return a + b;
}

console.log(somar(23, 44));

function maiorNumero(first, last) {
    if (first > last) {
        return "O primeiro número é maior";
    }
    else if (first < last) {
        return "O segundo número é maior";
    }
    else {
        return "Os dois números são iguais";
    }
};

console.log(maiorNumero(23,32));
console.log(maiorNumero(234,32));
console.log(maiorNumero(23,23));

