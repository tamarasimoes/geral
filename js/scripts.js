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