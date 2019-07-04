class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide === undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            } else {
                return this.expenses.sort().join(', ');
            }
        } else return 'empty';
    }
}

const assert = require('chai').assert;

describe('Calculater', function () {
    let calculator;
    beforeEach(function () {
        calculator = new Calculator();
    });


    it('Contains a property expenses that is initialized to an empty array', function () {

        assert.isArray(calculator.expenses);
        assert.isEmpty(calculator.expenses);
    })

    describe('Function add(data) – adds the passed in item (of any type) to the expenses', function () {
        it('Add primitive', function () {
            calculator.add(5);
            calculator.add('text');
            calculator.add(5.5);
            calculator.add(true);
            //console.log(calculator.expenses);


            assert.deepEqual(calculator.expenses, [5, 'text', 5.5, true])
        })

        // it('Add reference', function () {
        //     calculator.add({
        //         key: 'value'
        //     });
        //     calculator.add([1]);
        //     calculator.add(() => true);

        //    // console.log(calculator.expenses);

        //     assert.deepEqual(calculator.expenses, [{ key: 'value' }, [ 1 ], [Function]])
        // })



    })

    describe('Function divideNums() ', function () {
        it('standart', function () {
            calculator.add(100);
            calculator.add(2);
            // console.log(calculator.divideNums());

            assert.equal(calculator.divideNums(), 50)

        })

        it('standart 3', function () {
            calculator.add(100);
            calculator.add(2);
            calculator.add(5);
            // console.log(calculator.divideNums());

            assert.equal(calculator.divideNums(), 10)

        })

        it('no input', function () {
            assert.throw(() => calculator.divideNums(), "There are no numbers in the array!");
        })

        it('no number input', function () {
            calculator.add('pesho');
            calculator.add({});
            calculator.add('angel');

            assert.throw(() => calculator.divideNums(), "There are no numbers in the array!");
        })

        it('divide with float', function () {
            calculator.add(10.4);
            calculator.add(1.2);
            calculator.add(1);
           // console.log(calculator.divideNums());
           assert.closeTo(calculator.divideNums(), 8.67,0.01)
             
        })


        it('divide by zero', function () {
            calculator.add(10.4);
            calculator.add(0);
           
           // console.log(calculator.divideNums());
           assert.equal(calculator.divideNums(), 'Cannot divide by zero')
             
        })
    })

    describe('toString() ', function () {
        it('standard', function () {
            calculator.add(10);
            calculator.add('Pesho');
            calculator.add(5);
            // console.log(calculator.toString());

            assert.equal(calculator.toString(), '10 -> Pesho -> 5')
        })

        it('no input', function () {

            //console.log(calculator.toString());

            assert.equal(calculator.toString(), 'empty array')
        })

        it('one input', function () {
            calculator.add(1);

            //  console.log(calculator.toString());

            assert.equal(calculator.toString(), '1')
        })
    })

    describe('orderBy() ', function () {
        it('standard', function () {
            calculator.add(10);
            calculator.add('Pesho');
            calculator.add(5);
            // console.log(calculator.orderBy());

            assert.equal(calculator.orderBy(), '10, 5, Pesho')
        })

        it('no input', function () {

            //console.log(calculator.orderBy());

            assert.equal(calculator.orderBy(), 'empty')
        })

        it('one input', function () {
            calculator.add(1);

            // console.log(calculator.orderBy());

            assert.equal(calculator.orderBy(), '1')
        })

        it('other', function () {
            calculator.add({});
            calculator.add([1, 2, 3]);


            //console.log(calculator.orderBy());

            assert.equal(calculator.orderBy(), '1,2,3, [object Object]')
        })

        it('mixed', function () {
            calculator.add({});
            calculator.add(2);
            calculator.add([1, 2, 3]);


            //  console.log(calculator.orderBy());

            assert.equal(calculator.orderBy(), '1,2,3, 2, [object Object]')
        })

    })

});