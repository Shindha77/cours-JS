const tempMax = [12, 5, -5, 0, 4];

for (let i = 0; i < tempMax.length; i++) {
    if ([i + 1] == 1) {
        console.log(`${tempMax[i]} degrés dans ${[i +1]} jour`);
    } else {
        console.log(`${tempMax[i]} degrés dans ${[i +1]} jours`);
    }
}