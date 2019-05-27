function solve(input) {
    let result =input.sort((a,b)=>{
        return a.length-b.length || a.localeCompare(b)
    });
    for (const el of result) {
        console.log(el);
    }
}
solve(['alpha', 
'beta', 
'gamma']
);