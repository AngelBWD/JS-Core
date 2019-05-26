function solve(input) {
    input = input.map(Number)
    let result = input.sort((a, b) => {
        return a-b;
    });
    console.log(result.slice(0,2).join(' '));
}
solve([30, 15, 50, 5]);