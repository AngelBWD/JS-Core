function solve(params) {
    let result = [];
    for (let i = 0; i < params.length; i++) {
        for (let j = 0; j < params[i].length; j++) {
            result.push(params[i][j])
        }
    }
    console.log(result.sort((a, b) => {
        return a - b
    }).pop());
}
solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);