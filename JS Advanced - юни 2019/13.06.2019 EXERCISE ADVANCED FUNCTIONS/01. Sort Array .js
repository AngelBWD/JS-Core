function solve(array, order) {
    if (order === 'desc') {
        array = array.sort((a, b) => {
            return b - a
        });
    } else {
        array.sort((a, b) => {
            return a - b
        });
    }
    return array;
    
}
solve([14, 7, 17, 6, 8], 'desc');