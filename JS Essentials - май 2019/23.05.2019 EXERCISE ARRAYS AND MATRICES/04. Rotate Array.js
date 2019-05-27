function solve(input) {
    let countRotate = +input.pop();
    for (let i = 0; i < countRotate; i++) {
        let k = input.pop();
        input.unshift(k);

    }
   console.log(input.join(' ')); 
}
solve(['1',
    '2',
    '3',
    '4',
    '2'
]);