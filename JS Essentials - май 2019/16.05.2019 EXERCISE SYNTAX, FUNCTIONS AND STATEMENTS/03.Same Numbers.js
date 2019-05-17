function solve(num) {

    let string = num.toString().split('');
    let sum = 0;

    for (let j = 0; j < string.length; j++) {
        sum += +string[j]
    }
    for (let i = 1; i < string.length; i++) {
        if (string[i] !== string[i - 1]) {
            console.log(false);
            console.log(sum);
            return;
        }
    }
    console.log(true);
    console.log(sum);
}
solve(2222222);