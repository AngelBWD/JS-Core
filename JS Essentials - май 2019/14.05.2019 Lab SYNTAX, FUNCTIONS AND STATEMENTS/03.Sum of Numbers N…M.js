function solve(str1, str2) {
    let sum = 0;
    for (let i = +str1; i <= +str2; i++) {
        sum += i;
    }
    console.log(sum); 
}
solve('1', '5');