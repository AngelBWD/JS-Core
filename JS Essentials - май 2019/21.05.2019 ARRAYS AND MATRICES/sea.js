function sea() {
    let sea = [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1];
    let island = [];
    let counter = 0;


    for (let i = 0; i < sea.length; i++) {
        if ((sea[i] === sea[i + 1]) && (sea[i] === 1)) {
            counter++
        } else {
            counter++;
            island.push(counter);
            counter = 0;
        }
    }

    let biggestIsland = Math.max(...island);
    let element = 1;
    let max = island[0];
    let maxIndex = 0;
    let newArr = [];

    if (biggestIsland === island[0]) {
        element = 1;
    } else {

        for (let i = 1; i < island.length; i++) {
            if (island[i] > max) {
                maxIndex = i;
                max = island[i];
            }
        }
        newArr = island.slice(0, maxIndex);

    }
    for (let i = 0; i < newArr.length; i++) {
        element = element + newArr[i];
    }


    console.log(`Най-големият остров се състои от ${biggestIsland} единици площ, и започва на ${element} елемент от морето!`);
}
sea()