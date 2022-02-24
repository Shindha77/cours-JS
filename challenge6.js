const calcAverage = (a, b, c) => {
    const moyenne = (a + b +c) / 3;
    return moyenne;
}

const dauphinsAverage = calcAverage(85, 54, 41);
const koalasAverage = calcAverage(23, 34, 27);

const checkWinner = function (average1, average2) {
    if (average1 > average2) {
        console.log(`Les Dauphins gagnent ${average1} vs ${average2}`);
    } else {
        console.log(`Les Koalas gagnent ${average2} vs ${average1}`);
    }
}

checkWinner(dauphinsAverage, koalasAverage);