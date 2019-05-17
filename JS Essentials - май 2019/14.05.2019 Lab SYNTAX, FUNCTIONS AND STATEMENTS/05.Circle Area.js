function solve(arg) {
    //console.log(typeof arg);

    if (typeof arg === 'number') {
        console.log((Math.PI * +arg * +arg).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`);

    }
}
solve(5);