const myName = "Tamara";
const birthCity = "Belo Horizonte";
let birthYear = "1988";
birthYear = "2030";

console.log(myName);
console.log(birthCity);
console.log(birthYear);

let patientId = 50;
let isEnrolled = true;
const patientInfo = { //é um objeto
    firstName: 'Tamara',
    lastName: 'Simões',
};
const patientEmail = 'tamara@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

const base = 5;
let height = 8;
const area = base * height;

console.log(area);

const perimeter = (base * 2) + (height * 2);
console.log(perimeter);

const note = 88;

if (note >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
}

else if (note < 80 && note >= 60) {
    console.log("Você está na nossa lista de espera");
}

else {
    console.log("Você foi reprovada(o)")
}

// && - AND
// || - OR
// ! - NOT

const currentHour = 1;
let message;

if (currentHour >=22) {
    console.log("Não deveríamos comer nada, é hora de dormir");
}

else if (currentHour >=18 && currentHour < 22) {
    console.log("Rango da noite, vamos jantar :D");
}

else if (currentHour >=14 && currentHour < 18) {
    console.log("Vamos fazer um bolo para o café da tarde?");
}

else if (currentHour >=11 && currentHour < 11) {
    console.log("Hora do almoço!");
}

else if (currentHour >=4 && currentHour < 11) {
    console.log("Hmmm, cheiro de café recém passado");
}
else {
    console.log("Dormindo");
}

let candidate = "lista";

switch (candidate) {
    case "aprovada":
        console.log("Parabéns, você passou!");
        break;

    case "lista":
        console.log("Você está em lista de espera");
        break;

    case "reprovada":
        console.log("Você não passou :(");
        break;

    default:
        console.log("Situação não identificada");
}

let num1 = 5;
let num2 = 13;
let num3 = 15;


if ((num1 % 2) || (num2 % 2) || (num3 % 2)) {
    console.log(true);
} 
else {
    console.log(false);
}

const custoProduto = 17;
const imposto = (custoProduto * 20) / 100;
const valorVenda = 30;

if (custoProduto < 0 || valorVenda < 0 || imposto < 0) {
    console.log("Erro: um dos valores está zerado!");
}

else {
    const custoTotal = custoProduto + imposto;
    const lucro = valorVenda - custoTotal;
    console.log("O custo total do produto é de R$ " + custoTotal);
    console.log("O lucro obtido na venda é de R$ " + lucro);
}

//Calculadora salário líquido

const sBruto = 2500.00;
var sLiquido;
var sTotal;

if (sBruto <= 1556.94) {
    const inss = (sBruto * 8) / 100;
    sLiquido = sBruto - inss;
}

else if (sBruto >= 1903.99 && sBruto <= 2594.92) {
    const inss = (sBruto * 9) / 100;
    sLiquido = sBruto - inss;
}

else if (sBruto >= 2594.93 && sBruto <= 5189.82) {
    const inss = (sBruto * 11) / 100;
    sLiquido = sBruto - inss;
}

else {
    sLiquido = sBruto - 570.88;
}

if (sLiquido >= 1903.99 && sLiquido <= 2826.65) {
    const irpf = (sLiquido * 7,5) / 100;
    sTotal = sLiquido - irpf;
}

const sTotal;
sLiquido = sTotal;
console.log("Salário líquido é de R$ " + sTotal);

//treinando array

let tamara = ['Metallica', 'Metal', 'Corrida', 'Alef', 'Trybe', 'Cerveja', 'Família'];

tamara[7] = 'Games';

for (let indice = 0; indice < tamara.length; indice++) {
    console.log(tamara.sort()[indice]);
}

let groceryList = ['Arroz', 'Feijao', 'Alface', 'Melancia'];

for (lista = 0; lista < groceryList.length; lista++) {
    console.log(groceryList[lista]);
}

let arrayTeste = [1, 3, 5, 7, 9];

for (let lists of arrayTeste) {
    console.log(lists);
}

let groceryList = ['Arroz', 'Feijao', 'Alface', 'Melancia'];

for (let lista of groceryList) {
    console.log(lista);
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//console.log(numbers); //1

let total = 0; //2
let media = 0; //3
for (let soma = 0; soma < numbers.length; soma++) {
    total = total + numbers[soma];
    media = total / numbers.length;
}

console.log(total);
console.log(media);

if (media > 20) { //4
    console.log('Valor maior que 20');
}
else {
    console.log('Valor menor ou igual a 20');
}

let maisIdade; //5
for (let idade = 0; idade < numbers.length; idade++) {
    maisIdade = Math.max(...numbers); //operador spread, modo curto de pedir valor de array (...), IMPORTANTE.
}
console.log(maisIdade);

// let impares;
// for (let quanto = 0; quanto < numbers.length; quanto++) {
//     impares = numbers[quanto] % 1;
// }

// console.log(impares);

let menorvalor;
for (menos = 0; menos < numbers.length; menos++) {
    menorvalor = Math.min(...numbers);
}
console.log(menorvalor); //7;

let criArray;
for (cria = 0; cria < 26; cria++) {
    criArray = [0];
    criArray.push(cria++);
    console.log(criArray);
}

let game = [2, 4, 6, 8, 10];
let sorteio = [2, 4, 5, 8, 30, 40];

let numeroAcertos;
for (let num = 0; num < sorteio.length; num++) {
    let sorteado = sorteio[num];
    for(let num2 = 0; num2 < game.length; num2++) {
        let jogos = game[num2];
    }
}