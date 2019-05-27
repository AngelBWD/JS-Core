function solve(input) {
    let step = +input.pop();
    let newArr = [];
    for (let i = 0; i < input.length; i += step) {
        newArr.push(input[i]);
    }
    newArr.forEach(x => {
        console.log(x)
    });
}
solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);