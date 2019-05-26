function solve(params) {
   let result = [];
   for (let i = 1; i < params.length; i+=2) {
     result.push(params[i]*2)
   } 
   console.log(result.reverse().join(' '));
   
}
solve([10, 15, 20, 25]);