//1
// function dayOfTheWeek(num) {
//   const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
//   if (dias[num - 1]) {
//     console.log(`El dia ${num} es ${dias[num - 1]}`);
//   } else {
//     console.log("tu numero no corresponde a un dia");
//   }
// }
// dayOfTheWeek(10);

//2
// function month(str) {
//   if (
//     str == "enero" ||
//     str == "marzo" ||
//     str == "mayo" ||
//     str == "julio" ||
//     str == "agosto" ||
//     str == "octubre" ||
//     str == "diciembre"
//   ) {
//     console.log("el mes tiene 31 dias");
//   } else if (str == "abril" || str == "junio" || str == "septiembre" || str == "noviembre") {
//     console.log("el mes tiene 30 dias");
//   } else if (str == "febrero") {
//     console.log("el mes estupido de 28 o 29 dias");
//   } else {
//     console.log("hiciste un typo");
//   }
// }
// month("abril");

// 3
// function number(num) {
//   if (num < 0) {
//     console.log("NEGATIVO");
//   } else if (num == 0) {
//     console.log("0");
//   } else if (num > 0) {
//     console.log("POSITIVO");
//   }
// }
// number(0);

//4

//5

//6
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//7
// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

//8
//

//9
// let x = 1;
// while (x <= 10) {
//   console.log(x);
//   x++;
// }

//9.1
// for (let i = 0; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//9.2

// function vowelCounter(arr) {
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u") {
//       counter++;
//     }
//   }
//   return counter;
// }

// const firstArr = vowelCounter(["a", "b", "c", "d", "e"]);
// console.log(firstArr);

// const secondArr = vowelCounter(["c", "o", "u", "r", "s", "e", "i", "t"]);
// console.log(secondArr);
