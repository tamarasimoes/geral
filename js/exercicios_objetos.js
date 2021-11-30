let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// exercicio 1
console.log('Bem-vinda, ' + info.personagem);

// exercicio 2
info['recorrente'] = 'Sim';
console.log(info);

// exercicio 3
for (let key in info) {
    console.log(key);
}

// exercicio 4
for (let key in info) {
    console.log(info[key]);
}

// exercicio 5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics 178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ', ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);

if (info.recorrente === info2.recorrente) {
    console.log('Ambos recorrentes');
}
else {
    console.log(info.recorrente, info2.recorrente);
}

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

// exercicio 6
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' é ' + leitor.livrosFavoritos[0].titulo);

// exercicio 7
leitor.livrosFavoritos[1] = [
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
    },
];

// exercicio 8
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')