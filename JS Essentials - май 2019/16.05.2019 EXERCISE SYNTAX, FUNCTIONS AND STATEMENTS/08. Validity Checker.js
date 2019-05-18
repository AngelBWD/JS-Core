function solve(params) {

    let x1 = +params[0];
    let y1 = +params[1];
    let x2 = +params[2];
    let y2 = +params[3];

    if (x1 === 0 || y1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        if ((Math.sqrt(x1 ** 2 + y1 ** 2)) % 1 === 0) {
            console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
        }
    }

    if (x2 === 0 || y2 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        if ((Math.sqrt(x2 ** 2 + y2 ** 2)) % 1 === 0) {
            console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        } else {
            console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
        }
    }

    let x1_2 = Math.abs(x1 - x2);
    let y1_2 = Math.abs(y1 - y2);
    let z = Math.sqrt((x1_2 ** 2) + (y1_2 ** 2))

    if (z % 1 == 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
solve([2, 1, 1, 1]);