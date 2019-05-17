function solve(arr) {
    
    let sum = 0;
    let inversedSum = 0;
    let concat = '';

    for (const el of arr) {
        sum += el;
        inversedSum += 1 / el;
        concat+=el;
    }
    console.log(sum);
    console.log(inversedSum);
    console.log(concat);
}
solve([1, 2, 3]);