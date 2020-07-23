let arr = [];

while(arr.length < 7){
    let r = Math.floor(Math.random() * 18) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
arr=arr.concat([...Array(2)].fill(arr[arr.length - 1]));
console.log(arr);
arr.unshift(arr[0]);
console.log(arr);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
} 

let mixArr = [...arr];
shuffle(mixArr);

let newMixedArr = mixArr;    
console.log(newMixedArr);
 
let firstArr = [];
let helper = [];
let secondArr = [];
let thirthArr = [];

for (let i = 0; i < newMixedArr.length; i++) {
   if( i === 0) {
    firstArr.push(newMixedArr[i]);
   } else {
       if(newMixedArr[i] === newMixedArr[i - 1]){
        helper.push(newMixedArr[i]);
       } else {
        firstArr.push(newMixedArr[i]);
       }
   }
}

console.log(firstArr);
console.log(helper);
console.log(thirthArr);

for (let i = 0; i < helper.length; i++) {
    if( i === 0) {
     secondArr.push(helper[i]);
    } else {
        if(helper[i] === helper[i - 1]){
            thirthArr.push(helper[i]);
        } else {
            secondArr.push(helper[i]);
        }
    }
 }


console.log(firstArr);
console.log(secondArr);
console.log(thirthArr);


let wheelArray = [];
if (thirthArr.length === 1 && secondArr.length === 1 && firstArr[firstArr.length - 1] === secondArr[secondArr.length - 1]) {
    let index = Math.floor(Math.random() * 5) + 2;
    wheelArray = [...secondArr, ...firstArr];
    let thirthArrElement = thirthArr[0];
    wheelArray.splice(index,0,thirthArrElement);
    
    console.log(wheelArray);
    
    console.log('ok');
   
} else if (secondArr[secondArr.length - 1] === thirthArr[thirthArr.length - 1]) {
     if (secondArr[0] !== firstArr[firstArr.length - 1]) {
        wheelArray = [...thirthArr,...firstArr, ...secondArr];
        console.log('ok');
     } else {
        wheelArray = [...thirthArr,...secondArr, ...firstArr];
        console.log('ok');

     }
} else {
     if (secondArr[0] !== firstArr[firstArr.length - 1]) {
        wheelArray = [...firstArr, ...secondArr,...thirthArr];
        console.log('ok');

     } else {
         if (thirthArr.length < 1) {
             wheelArray = [ ...secondArr,...firstArr,...thirthArr];
             console.log('ok');
         } else {
             wheelArray = [...firstArr, ...secondArr,...thirthArr];
             console.log('ok');
         }

     }
    
 }

 
 console.log(wheelArray);
