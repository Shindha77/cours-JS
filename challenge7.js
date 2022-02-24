const calcTip = function (note) {
    if (note > 50 && note < 300) {
        tipS = (note * 0.15);
        return tipS;
    }
    tipS = (note * 0.2);
    return tipS;
}

const bills = [125, 555, 44];

const tips = bills.map((element) => {
    return calcTip(element);
});

for (let i = 0; i < bills.length; i++) {
    const totals = bills[i] + tips[i];
    console.log(totals);
}

