let arr = [];
while(arr.length < 7){
    let r = Math.floor(Math.random() * 18) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
arr=arr.concat([...Array(2)].fill(arr[arr.length - 1]))
console.log(arr);
arr.unshift(arr[0])
console.log(arr);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
} 

let mixArr = [...arr];
shuffle(mixArr)
let newMixedArr = mixArr;
console.log(newMixedArr);

let first = [];
let second = [];
let thirth = [];

for (let i = 0; i < newMixedArr.length; i++) {
   if( i === 0) {
    first.push(newMixedArr[i]);
   } else {
       if(newMixedArr[i] === newMixedArr[i - 1]){
        second.push(newMixedArr[i]);
       } else {
        first.push(newMixedArr[i]);
       }
   }
    
}

console.log(first);
console.log(second);
console.log(thirth);



























































