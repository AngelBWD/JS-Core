function solve(params) {

    sum1 = 0;
    sum2 = 0;
    let result = [];

    let countElementsInArray = params.length;
    for (let row = 0; row < params.length; row++) {
        for (let col = 0; col < params[row].length; col++) {
            if (row == col) {
                sum1 += params[col][row];
            }
            if ((row + col) == (params.length - 1)) {
                sum2 += params[row][col];
            }


        }
    }
    result.push(sum1);
    result.push(sum2);
    console.log(result.join(' '));

}
solve([
    [20, 40],
    [10, 60]
]);