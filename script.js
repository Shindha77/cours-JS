const bernardWeight = prompt("Poids de Bernard en kg");
const bernardHeight = prompt("Taille de Bernard en mètre");
const bernardIMC = bernardWeight / (bernardHeight * bernardHeight);


const marcelWeight = prompt("Poids de Marcel en kg");
const marcelHeight = prompt("Taille de Marcel en mètre");
const marcelIMC = marcelWeight / (marcelHeight * marcelHeight);

console.log(bernardIMC > marcelIMC ? "Bernard a un IMC (" + bernardIMC.toFixed(2) + ") plus élevé que Marcel (" + marcelIMC.toFixed(2) + ")" : "Marcel a un IMC (" + marcelIMC.toFixed(2) + ") plus élevé que Bernard (" + bernardIMC.toFixed(2) + ")");

if (bernardIMC < 25) {
    console.log("Bernard : Insufissance pondérale");
} else if (bernardIMC < 30) {
    console.log("Bernard : Poids normal");
} else if (bernardIMC < 35) {
    console.log("Bernard : Surpoids");
} else if (bernardIMC < 45) {
    console.log("Bernard : Obésité");
} else {
    console.log("Bernard : Obésité importante");
} 

if (marcelIMC < 25) {
    console.log("Marcel : Insufissance pondérale");
} else if (marcelIMC < 30) {
    console.log("Marcel : Poids normal");
} else if (marcelIMC < 35) {
    console.log("Marcel : Surpoids");
} else if (marcelIMC < 45) {
    console.log("Marcel : Obésité");
} else {
    console.log("Marcel : Obésité importante");
} 