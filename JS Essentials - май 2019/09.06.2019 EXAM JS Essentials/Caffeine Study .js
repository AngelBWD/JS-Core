function solve(days) {

    let quantityCoffee = 0;
    let quantityCola = 0;
    let quantityTea = 0;
    let quantityEnergy = 0;

    for (let i = 1; i <= days; i++) {
        quantityCoffee += 450;
        quantityCola += 500;
        quantityTea += 1050;
        if (i % 5 == 0) {
            quantityEnergy += 1500;
        }
        if (i % 9 == 0) {
            quantityCola += 1000;
            quantityEnergy += 1000;
        }
    }
    let result = ((quantityCoffee / 100) * 40) + ((quantityCola / 100) * 8) + ((quantityTea / 100 * 20)) + ((quantityEnergy / 100 * 30));
    console.log(`${result} milligrams of caffeine were consumed`);

}
solve(5);
solve(8);