// Perulangan for
for (let i = 0; i < 10; i++) {
      console.log("For" + i);
}
// Perulangan Do While
let iterasi = 0;
do {
      console.log("Do while" + iterasi);
      iterasi++;
} while (iterasi < 5);
// Perulangan While

iterasion = 0;
while (iterasion < 7) {
      console.log("while" + iterasion);
      iterasion++;
}

// Array
const fruits = ["Apple", "Grape", "Banana", "Orange", "Avocado"];
for (const key in fruits) {
      console.log("for in" + key);
      console.log("for in" + fruits[key]);
}
for (const val of fruits) {
      console.log("for of" + val);
}

// Array dalam bentuk object
const person = { name: "Holid", age: 21, sex: "M", school: ["TK ATZ", "SD ATZ", "SMP ATZ"] };
for (const key in person) {
      console.log("for in" + key);
      console.log("for in" + person[key]);
}
// Error tidak dapat menggunakan for off pada array object
// for (const val of person) {
//       console.log("for of" + val);
// }

// SC Game
for (let i = 0; i < 0; i--) {
      if (i == -100000) {
            break;
      } else if (i == -200000) {
            break;
      } else console.log(i);
}
