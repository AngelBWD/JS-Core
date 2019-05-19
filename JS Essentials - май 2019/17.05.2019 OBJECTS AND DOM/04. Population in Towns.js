function solve(input) {
    let result = {}
    for (const el of input) {

        let tockens = el.split('<->');
        let town = tockens[0].trim();
        let population = +tockens[1].trim();
        if (!result.hasOwnProperty(town)) {
            result[town] = {
                town: population,
            };
        } else {
            result[town].town += +population
        }
    }
    for (const key in result) {
        console.log(`${key} : ${result[key].town}`);
    }
}
// solve(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000'
// ]);
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'

]);