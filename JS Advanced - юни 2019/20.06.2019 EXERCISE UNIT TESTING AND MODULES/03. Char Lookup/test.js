const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
describe("lookupChar", function () {
    it("first parameter is string, second parameter is not number, shoud return undefined ", function () {
        let expected = lookupChar('js4ever', 'ok');
        expect(expected).to.equal(undefined);
    })

    it("first parameter is not string, second parameter is  number, shoud return undefined ", function () {
        let expected = lookupChar(4, 4);
        expect(expected).to.equal(undefined);
    })

    it("first parameter is not string, second parameter is not number, shoud return undefined ", function () {
        let expected = lookupChar(4, 'ok');
        expect(expected).to.equal(undefined);
    })

    it("first parameter is  string, second parameter is number, but index < 0, shoud return Incorrect index ", function () {
        let expected = lookupChar('angel', -2);
        expect(expected).to.equal('Incorrect index');
    })

    it("first parameter is  string, second parameter is number, but index > firstParam.lenght, shoud return Incorrect index ", function () {
        let expected = lookupChar('angel', 10);
        expect(expected).to.equal('Incorrect index');
    })

    it("first parameter is  string, second parameter is number, shoud return character at the specified index in the string", function () {
        let expected = lookupChar('angel', 2);
        expect(expected).to.equal('g');
    })
    it("first parameter is  string, second parameter is double number, shoud return Incorrect index ", function () {
        let expected = lookupChar('angel', 2.2);
        expect(expected).to.equal(undefined);
    })

});