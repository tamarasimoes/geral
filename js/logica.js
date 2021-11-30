let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index++) {
    sum += fruits[index]; // o novo valor da variável sum é o próprio sum mais o valor que se encontra em índice (seria como sum = sum + fruits...)
}

if (sum > 15) {
    console.log(sum);
}
else {
    console.log("Valor menor que 16");
}

//exercício 1

n = 5;
for (i = 0; i < n; i++) {
    console.log("*****");
}

//exercicio 2
for (it = 0; it < n; it++) {
    n -= 1;
    console.log(n);
}

//exercicio 3
