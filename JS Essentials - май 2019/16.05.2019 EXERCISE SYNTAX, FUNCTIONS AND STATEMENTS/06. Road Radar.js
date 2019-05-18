function solve(params) {
    let speed = +params[0];
    let place = params[1];

    let maxSpeedCity = 50;
    let maxSpeedMotorway = 130;
    let maxSpeedInterstate = 90;
    let maxSpeedResidential = 20;

    if (place === 'city') {
        if (speed <= maxSpeedCity) {

        } else if (speed > maxSpeedCity && speed <= maxSpeedCity + 20) {
            console.log(`speeding`);
        } else if (speed > maxSpeedCity + 20 && speed <= maxSpeedCity + 40) {
            console.log(`excessive speeding`);
        } else {
            console.log(`reckless driving`);
        }
    }if (place === 'residential') {
        if (speed <= maxSpeedResidential) {

        } else if (speed > maxSpeedResidential && speed <= maxSpeedResidential + 20) {
            console.log(`speeding`);
        } else if (speed > maxSpeedResidential + 20 && speed <= maxSpeedResidential + 40) {
            console.log(`excessive speeding`);
        } else {
            console.log(`reckless driving`);
        }
    }if (place === 'interstate') {
        if (speed <= maxSpeedInterstate) {

        } else if (speed > maxSpeedInterstate && speed <= maxSpeedInterstate + 20) {
            console.log(`speeding`);
        } else if (speed > maxSpeedInterstate + 20 && speed <= maxSpeedInterstate + 40) {
            console.log(`excessive speeding`);
        } else {
            console.log(`reckless driving`);
        }
    }if (place === 'motorway') {
        if (speed <= maxSpeedMotorway) {

        } else if (speed > maxSpeedMotorway && speed <= maxSpeedMotorway + 20) {
            console.log(`speeding`);
        } else if (speed > maxSpeedMotorway + 20 && speed <= maxSpeedMotorway + 40) {
            console.log(`excessive speeding`);
        } else {
            console.log(`reckless driving`);
        }
    }
}
solve([120, 'interstate'])