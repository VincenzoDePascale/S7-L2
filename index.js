class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  createPerson() {
    return `ciao sono ${this.name}, il mio cognome è ${this.surname}, ed ho ${this.age}`;
  }

  confrontoEtà(user) {
    if (this.age > user.age) {
      console.log(
        `${this.name} ${this.surname} è più vecchio di ${user.name} ${user.surname}.`
      );
    } else if (this.age < user.age) {
      console.log(
        `${this.name} ${this.surname} è più giovane di ${user.name} ${user.surname}.`
      );
    } else {
      console.log(
        `${this.name} ${this.surname} e ${user.name} ${user.surname} hanno la stessa età.`
      );
    }
  }
}

let marioRossi = new Person("Mario", "Rossi", 34);
let giuseppeVerdi = new Person("Giuseppe", "Verdi", 53);
let giovanniMucciaccia = new Person("Giovanni", "Mucciaccia", 41);
let alessandroAndriano = new Person("Alessandro", "Adriano", 23);
let antonioPepe = new Person("Antonio", "Pepe", 53);
let francescoAlberti = new Person("Francesco", "Alberti", 35);
let antonioFraioli = new Person("Antonio", "Fraioli", 61);
let camilloVerdone = new Person("Camillo", "Verdone", 18);
let albertoLupi = new Person("Alberto", "Lupi", 50);
let federicoGiusti = new Person("Federico", "Giusti", 21);

//console.log(marioRossi.createPerson());
console.log(federicoGiusti.confrontoEtà(antonioPepe));

class Page {
  constructor(items = [], pageSize = 3) {
    this.items = items;
    this.pageSize = pageSize;
  }

  addPerson() {
    let tableBody = document.querySelector("tbody");

    for (let i = 0; i < this.items.length; i++) {
      let listPeople = document.createElement("tr");
      listPeople.innerHTML = `<td>${this.items[i].name}</td>
      <td>${this.items[i].surname}</td>
      <td>${this.items[i].age}</td>`;
      tableBody.appendChild(listPeople);
    }
    return { tableBody, listPeople };
  }
}

let listPeople = [
  marioRossi,
  giuseppeVerdi,
  giovanniMucciaccia,
  alessandroAndriano,
  antonioPepe,
  francescoAlberti,
  antonioFraioli,
  camilloVerdone,
  albertoLupi,
  federicoGiusti,
];

let myPage = new Page(listPeople);
myPage.addPerson();
