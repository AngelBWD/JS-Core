function solve(num) {
    // for (let i = 1; i <= num; i++) {
    //     console.log(' *'.repeat(num));
    // }
    //2 Вариант
    for (let i = 1; i <= num; i++) {
        console.log('*'.repeat(num).split('').join(' '));
    }
}
solve(5);