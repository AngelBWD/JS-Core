function solve(num1, num2) {

    let bigger = Math.max(+num1, +num2);
    let smaller = Math.min(+num1, +num2);

    if (bigger % smaller === 0) {
        console.log(smaller);
    } else {
        for (let i = smaller; i > 0; i--) {
            if (bigger % i === 0 && smaller % i === 0) {
                console.log(i);
                return;
            }
        }
    }
}
solve(2154, 458);