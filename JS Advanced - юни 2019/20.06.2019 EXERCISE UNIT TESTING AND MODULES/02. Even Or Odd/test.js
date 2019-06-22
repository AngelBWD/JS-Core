const expect = require('chai').expect;


function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
describe("isOddOrEven", function () {
    //if the paramenter is not string(number)
    //if the paramenter is not string(object)

    it("test with number paramenter, shoud return undefined", function () {
        let expected = isOddOrEven(100);
        expect(expected).to.equal(undefined);
    })

    it("test with object paramenter, shoud return undefined", function () {
        let expected = isOddOrEven({name: "angel"});
        expect(expected).to.equal(undefined);
    })
       
    it("string parameter with even lenght, shoud return even", function () {
        let expected = isOddOrEven('js4ever!');
        expect(expected).to.equal('even');
    })

    it("string parameter with odd lenght, shoud return odd", function () {
        let expected = isOddOrEven('js4ever');
        expect(expected).to.equal('odd');
    })
    
 
});