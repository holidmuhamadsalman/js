IPK = 1;
if (IPK >= 3.5 && IPK <= 4) {
      console.log("Cumlaude");
} else if (IPK >= 3 && IPK <= 3.5) {
      console.log("Baik");
} else if (IPK >= 2 && IPK <= 3) {
      console.log("Cukup");
} else {
      console.log("Perbaikan");
}

let terjemah = 5;
switch (terjemah) {
      case 1:
            console.log("satu");

            break;
      case 2:
            console.log("dua");

            break;
      case 3:
            console.log("tiga");

            break;
      default:
            console.log("tidak ada");
            break;
}

// Continues
for (let i = 0; i < 10; i++) {
      if (i == 7) {
            break;
      }
      if (i == 5) {
            continue;
      }
      console.log(i);
}

for (let i = 0; i < 10; i++) {
      if (i == 7) {
            break;
      }
      if (i == 5) {
            continue;
      }
      console.log(i);
}
