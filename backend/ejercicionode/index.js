const person = require("./modulo");
const catMe = require("cat-me");
const fs = require("fs");
const { name, age } = person.person;

console.log("Hola mundo");
console.log(`Hola, soy ${name} y tengo ${age} años`);
console.log(catMe());

fs.writeFile("person.txt", `Hola, soy ${name} y tengo ${age} años`, () => {
  console.log("Archivo creado");
});
