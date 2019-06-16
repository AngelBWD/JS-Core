let solution = (function () {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 7,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function (inputString) {
        let inputData = inputString.split(' ');
        let command = inputData[0];
        if (command === 'restock') {
            let microElement = inputData[1];
            let quantity = Number(inputData[2]);
            robot[microElement] += quantity;
            return 'Success'
        } else if (command === 'report') {
            return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`

        } else if (command === 'prepare') {
            let selectedProduct = inputData[1];
            let selectedProductQuantity = Number(inputData[2]);
            let currentProductStats = products[selectedProduct];

            let canProductBeCooked = true;


            for (const microElement in currentProductStats) {
                let element = currentProductStats[microElement];
                if (robot[microElement] < selectedProductQuantity * selectedProductQuantity) {
                    canProductBeCooked = false;
                    return `Error: not enough ${microElement} in stock`
                   

                }
            }

            if (canProductBeCooked) {
                for (const microElement in currentProductStats) {
                    if (currentProductStats.hasOwnProperty(microElement)) {
                        let microElementQuantity = currentProductStats[microElement];
                        robot[microElement] -= microElementQuantity * selectedProductQuantity
                    }
                }
                return 'Success'
            }
        }
    }
})();

solution('restock carbohydrate 10')
solution('restock flavour 10')
solution('prepare apple 1')
solution('restock fat 10')
solution('prepare burger 1')
solution('report')