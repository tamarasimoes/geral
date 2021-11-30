let singer = {
    firstName: 'James',
    lastName: 'Hetfield',
    nickName: 'PapaHet',
    bandName: 'Metallica',
    age: 60,
    bestAlbuns: ['Ride the Lightning', 'Master of Puppets', 'And Justice for All'],
    bornInfo: {
        city: 'San Francisco',
        state: 'California',
    }
};

//acessando propriedades de objetos
console.log('O cantor ' + singer.firstName + ' ' + singer.lastName + ', da banda ' + singer.bandName + ', possui ' + singer.age + ' anos.');
console.log('O cantor nasceu na cidade de ' + singer.bornInfo.city + ', no estado da ' + singer.bornInfo.state + '.');
console.log('Os considerados melhores álbuns da banda ' + singer.bandName + ' são: ' + singer.bestAlbuns[0] + ', ' + singer.bestAlbuns[1] + ' e ' + singer.bestAlbuns[2] + '.');

singer['fullName'] = singer.firstName + ' ' + singer.lastName;
//console.table(singer);

//for in
let soccerPlayers = {
    chelsea: 'Kanté',
    mCity: 'Kevin De Bruyne',
    westHam: 'Antonio',
}

for (index in soccerPlayers) {
    console.log(index, soccerPlayers[index]); //isso faz o for percorrer o objeto e trazer cada valor da propriedade do objeto.
}
//index no console.log se eu quiser o nome da propriedade

let defensor = ['Van Dijk', 'Sergio Ramos', 'Thiago Silva', 'Varane', 'Zouma', 'Rudiger'];
for (key in defensor) {
    console.log(key, defensor[key]);
}

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let chave in names) {
    console.log ('Olá, ' + names[chave]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let prints in car) {
    console.log(prints, car[prints]);
}