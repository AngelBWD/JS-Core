function solve(input) {
    let result = {};
    let pattern = /[a-zA-Z]+/g;
    let words = input[0].match(pattern)
    for (let i = 0; i < words.length; i++) {
        if (!result[words[i]]) {
            result[words[i]] = 1;
        } else {
            result[words[i]] += 1;
        }
    }
console.log(JSON.stringify(result));
}
solve(['Far too slow, you\'re far too slow.']);