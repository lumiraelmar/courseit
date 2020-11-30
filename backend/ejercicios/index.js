// 1. Fizzbuzz
// function fizzbuzz(num) {
//   const arr = [];
//   for (let i = 0; i <= num; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       arr.push(`${i} - Fizzbuzz`);
//     } else if (i % 3 == 0) {
//       arr.push(`${i} - Fizz`);
//     } else if (i % 5 == 0 && i % 5 == 0) {
//       arr.push(`${i} - Buzz`);
//     } else {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// console.log(fizzbuzz(15));

// 2. Mayor numero
// function mayor(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[arr.length - 1];
// }

// console.log(mayor([1, 6, 4, 9, 2]));

// 3. Mayor 2 numeros
// function mayor(arr) {
//   arr.sort((a, b) => a - b);
//   const mayores = [arr[arr.length - 2], arr[arr.length - 1]];
//   return mayores;
// }

// console.log(mayor([1, 6, 4, 9, 2]));

// 4. duplicados
// function duplicados(arr) {
//   let duplicados = [];
//   const sorted = arr.sort((a, b) => a - b);

//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] == sorted[i + 1]) {
//       duplicados.push(sorted[i]);
//     }
//   }
//   const newSet = [...new Set(duplicados)];
//   return newSet;
// }

// console.log(duplicados([1, 2, 3, 2, 3, 4, 1]));

// 5. unicos
// function unicos(arr) {
//   let unicos = [];

//   arr.forEach((num1) => {
//     let count = 0;
//     arr.forEach((num2) => {
//       if (num1 == num2) {
//         count++;
//       }
//     });
//     if (count == 1) {
//       unicos.push(num1);
//     }
//   });
//   return unicos;
// }

// console.log(unicos([1, 2, 2, 3, 4, 1]));

// 6. PALINDROMOS
// function palindromos(str) {
//   const reverse = str.split("").reverse().join("");
//   if (reverse == str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindromos("juani"));
// console.log(palindromos("sugus"));

// 7. INVERSO
// function reverse(str) {
//   const reverse = str.split("").reverse().join("");
//   return reverse;
// }

// console.log(reverse("juani"));
// console.log(reverse("sugus"));

//DUPLICADOS NICO
// function Repeated(arr) {
//   const duplicates = [
//     ...new Set(arr.filter((value, index, self) => self.indexOf(value) !== index)),
//   ];

//   return duplicates;
// }
// console.log(Repeated([1, 2, 2, 3, 4, 1]));

//UNICOS
function unique(arr) {
  const duplicates = [
    ...new Set(arr.filter((value, index, self) => self.indexOf(value) !== index)),
  ];

  const unique = arr.filter((num) => !duplicates.includes(num));

  return unique;
}

console.log(unique([1, 2, 2, 3, 4, 1]));
