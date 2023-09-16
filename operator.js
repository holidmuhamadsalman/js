// nilai1 = 8;
// let nilai2 = 7;
// nilai1 += nilai2;
// console.log(nilai1);

// let IPK = 3.2;
// let grade = IPK > 3.5 ? "Cumlaude" : IPK >= 3 && IPK <= 3.5 ? "Baik" : "Cukup";
// console.log(grade);

// let SPBU = "";
// let Mobil = 1400;
// let BBM = SPBU == "Motor" || "Plat Kuning" ? "Subsidi" : Mobil < 1500 ? "Pertamax" : Mobil >= 1500 ? "Pertamax Turbo" : "Tidak Terdefinisi";
// console.log(BBM);

let suhu = 500;
let kondisi = suhu >= -100 && suhu <= 0 ? "Beku" : suhu >= 1 && suhu <= 100 ? "Cair" : suhu >= 101 && suhu <= 500 ? "Uap" : "Tidak Terdefinisi";
console.log(kondisi);

function jenisBBM(plat, cc) {
      if (plat === "kuning" || plat === "motor") {
            return "BBM subsidi";
      } else if (plat === "mobil" && cc < 1500) {
            return "PERTAMAX";
      } else if (plat === "mobil" && cc >= 1500) {
            return "Pertamax Turbo";
      } else {
            return "Tidak terdeteksi";
      }
}
console.log(jenisBBM("kuning", 1800));
console.log(jenisBBM("mobil", 1600));
console.log(jenisBBM("motor", 1200));
console.log(jenisBBM("mobil", 1300));
console.log(jenisBBM());
