const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
//addFive 
//positive number 
//negative number
//floating point number 
//string


describe("mathEnforcerObject", function () {
    it('AddFive with positive number, shoud return the number + 5', () => {
        let expected = mathEnforcer.addFive(10);
        expect(expected).to.equal(15);
    })

    it('AddFive with negative number, shoud return the number + 5', () => {
        let expected = mathEnforcer.addFive(-10);
        expect(expected).to.equal(-5);
    })

    it('AddFive with floating point number, shoud return the number + 5', () => {
        let expected = mathEnforcer.addFive(10.5);
        expect(expected).to.equal(15.5);
    })

    it('AddFive with string as a parameter', () => {
        let expected = mathEnforcer.addFive('10.5');
        expect(expected).to.equal(undefined);
    })

    it('AddFive with positive number, shoud return the number -10', () => {
        let expected = mathEnforcer.subtractTen(10);
        expect(expected).to.equal(0);
    })

    it('subtractTen with negative number, shoud return the number -10', () => {
        let expected = mathEnforcer.subtractTen(-10);
        expect(expected).to.equal(-20);
    })

    it('subtractTen with floating point number, shoud return the number -10', () => {
        let expected = mathEnforcer.subtractTen(10.5);
        expect(expected).to.be.closeTo(0.5, 0.01);
    })

    it('subtractTen with string as a parameter', () => {
        let expected = mathEnforcer.subtractTen('10.5');
        expect(expected).to.equal(undefined);
    })

    it("Sum with two positive number,shoud return sum", () => {
        let expected = mathEnforcer.sum(1, 2);
        expect(expected).to.equal(3);
    })

    it("Sum with two negative number,shoud return sum", () => {
        let expected = mathEnforcer.sum(-1, -2);
        expect(expected).to.equal(-3);
    })

    it("Sum with two floating point number,shoud return sum", () => {
        let expected = mathEnforcer.sum(1.1, 2.2);
        expect(expected).to.be.closeTo(3.3,0.01);
    })

    it("Sum with one number and string ,shoud return sum", () => {
        let expected = mathEnforcer.sum(1, '2');
        expect(expected).to.equal(undefined);
    })

    it("Sum with one string and number ,shoud return sum", () => {
        let expected = mathEnforcer.sum('1', 3);
        expect(expected).to.equal(undefined);
    })
})