const calcTip = function (note) {
    if (note > 50 && note < 300) {
        tipS = (note * 0.15);
        return tipS;
    }
    tipS = (note * 0.2);
    return tipS;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = bills.map((element) => {
    return calcTip(element);
});

let totals = [];

for (let i = 0; i < bills.length; i++) {
    totals[i] = bills[i] + tips[i];
}

console.log(totals);

const calcAverage = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    average = sum / array.length;
    return average.toFixed(2);
}

console.log(calcAverage(totals));

