function solve(params) {
    let result = [];
    let countDigitInOneElements = params[0].length;
    let count = 0;

    for (let i = 0; i < params.length; i++) {
        for (let j = 0; j < params[i].length; j++) {
            result.push(params[i][j])
        }
    }
    for (let k = 0; k < result.length; k++) {
        if (result[k] === result[k + countDigitInOneElements]) {
            count++;
        }
        if (result[k] === result[k + 1]) {
            count++;
        }
        
        if (result[k] === result[k + 1] && k % countDigitInOneElements === 0) {
            count--;
        }
        

    }

    console.log(count);

}
solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);