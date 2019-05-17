function solve(param) {
    let upperCase = param.toUpperCase();
    let patern = /[A-Za-z]+/g;
    let x = upperCase.match(patern)
    console.log(x.join(', '));
}
solve('Hi, how are you?')