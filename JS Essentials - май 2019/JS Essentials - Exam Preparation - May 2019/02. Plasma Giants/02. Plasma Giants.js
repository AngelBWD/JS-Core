function solve(inputArray, cutSize) {

    //Cut inputArray in two pieces
    let firstPart = inputArray.slice(0, inputArray.length / 2);
    let secondPart = inputArray.slice(inputArray.length / 2);

    //Create giants and get sum of the products of two giants 

    let firstGiantsLife = 0;
    let secondGiantsLife = 0;


    while (firstPart.length > 0 && secondPart.length > 0) {
        firstGiantsLife += firstPart.splice(0, cutSize).reduce((a, b) => a * b);
        secondGiantsLife += secondPart.splice(0, cutSize).reduce((a, b) => a * b);
    }
    //Fight
    let damagePerHit = Math.min(...inputArray);
    let deadLine = Math.max(...inputArray);
    let rounds = 1;
    let minLife = Math.min(firstGiantsLife, secondGiantsLife);
    let pointsToDead = minLife - deadLine;

    
    if (damagePerHit !== 0) {
        while (firstGiantsLife > deadLine && secondGiantsLife > deadLine) {
            firstGiantsLife -= damagePerHit;
            secondGiantsLife -= damagePerHit;
            rounds++;
        }
    }
    //Print the result 
    if (firstGiantsLife === secondGiantsLife) {
        console.log(`Its a draw ${firstGiantsLife} - ${secondGiantsLife}`);
    } else if (firstGiantsLife > secondGiantsLife) {
        console.log(`First Giant defeated First Giant with result ${firstGiantsLife} - ${secondGiantsLife} in ${rounds} rounds`);
    } else {
        console.log(`Second Giant defeated First Giant with result ${secondGiantsLife} - ${firstGiantsLife} in ${rounds} rounds`);
    }

}
solve([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);