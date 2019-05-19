function solve(input) {
    
let withoutFirstInput = input.shift();

    let mas = [];

    for (const el of input){
        let tockens  = el.split('|');
        let town = tockens[1].trim();
        let latitude = +tockens[2].trim();
        let longitude = +tockens[3].trim();
        mas.push({
            Town:  town,
            Latitude:  latitude,
            Longitude:  longitude
        })
    }
    console.log(JSON.stringify(mas));
    
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);