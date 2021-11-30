const a = 5;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const x = 6;
const y = 7;

if (x > y) {
    console.log("O maior número é 6");
}

else {
    console.log("O maior número é 7");
}

const value = 0;

if (value > 0) {
    console.log("Positive");
}

else if (value < 0) {
    console.log("Negative");
}

else {
    console.log("Zero");
}

const catetoOposto = 90;
const catetoAdjacente = 10;
const hipotenusa = 50;

if (catetoOposto + catetoAdjacente + hipotenusa == 180) {
    console.log(true);
}

else {
    console.log(false);
}

const xadrez = "CAVALO";
const result = xadrez.toLowerCase();

switch (result) {
    case "rei":
        console.log("Todas as direções");
        break;
    
    case "rainha": 
        console.log("Horizontal, vertical e diagonal, sem pular peças");
        break;

    case "bispo":
        console.log("Diagonal");
        break;

    case "cavalo":
        console.log("Vertical, horizontal, pula peças");
        break;

    case "torre":
        console.log("Vertical, horizontal, não pula peças");
        break;

    case "peão":
        console.log("Uma casa para frente e captura peças na diagonal");
        break;
    
    default:
        console.log("Peça não identificada");
}

const c = 3;
const d = 7;
const e = 2;


//par ou ímpar, ainda fazendo
let par = ((num1 + num2) % 2) === 0;
console.log(par);
}

else {
    console.log(false);
}
