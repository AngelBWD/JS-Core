function solve(input) {
//     let k = +input.shift();
//     let first = [];
//     let second = [];
//     for (let i = 0; i < input.length; i++) {
//         if (i === k) {
//             break;
//         }
//         first.push(input[i])

//     }
//     for (let j = 1; j < input.length; j++) {
//         if (j === k + 1) {
//             break;
//         }
//         second.push(input[j])

//     }
//     if (input[1] === undefined) {
//         console.log(input[0]);
//         console.log(input[0]);

//     } else {
//         console.log(first.join(" "));

//         console.log(second.join(" "));
//     }
// }
//2 nachin
let k = input[0];
let nums = input.slice(1);

console.log(nums.filter((n, i) => i < k).join(' '));
console.log(nums.filter((n, i) => i >= nums.length - k).join(' '));
}
solve([3, 7]);