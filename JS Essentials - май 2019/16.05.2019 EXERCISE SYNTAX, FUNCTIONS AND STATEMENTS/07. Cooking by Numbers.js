function solve(arr) {
    let num = +arr.shift();

    for (const el of arr) {
        if (el === 'chop') {
            num = num / 2;
            console.log(num);
        } else if (el == 'dice') {
            num = Math.sqrt(num)
            console.log(num);
        } else if (el == 'spice') {
            num = num + 1;
            console.log(num);
        }else if (el == 'bake') {
            num = num*3;
            console.log(num);
        }else if (el == 'fillet') {
            num = num*0.8;
            console.log(num.toFixed(2));
        }
    }
}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])