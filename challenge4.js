const scoreDauphins1 = prompt("Dauphins 1er score");
const scoreDauphins2 = prompt("Dauphins 2ème score");
const scoreDauphins3 = prompt("Dauphins 3ème score");

const scoreKoalas1 = prompt("Koalas 1er score");
const scoreKoalas2 = prompt("Koalas 2ème score");
const scoreKoalas3 = prompt("Koalas 3ème score");

const moyenneDauphins = ((parseInt(scoreDauphins1) + parseInt(scoreDauphins2) + parseInt(scoreDauphins3)) / 3);
const moyenneKoalas = ((parseInt(scoreKoalas1) + parseInt(scoreKoalas2) + parseInt(scoreKoalas3)) / 3);

console.log(moyenneDauphins);
console.log(moyenneKoalas)
if (moyenneDauphins >= 100 || moyenneKoalas >= 100) {
    if (moyenneDauphins > moyenneKoalas) {
        console.log("Les Dauphins ont remportés le trophée !");
    } else if (moyenneDauphins < moyenneKoalas) {
        console.log("Les Koalas ont remportés le trophée !");
    } else {
        console.log("Incroyable ! Les 2 équipes sont à égalité !");
    }
} else {
    console.log("Personne n'a gagné");
}