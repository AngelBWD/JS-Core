class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}


const expect = require('chai').expect;

describe('String builder tests', function () {
    let sb;
    this.beforeEach(function () {
        sb = new StringBuilder();
    });

    describe('check if functions are attaches to proto', function () {

        it('check if functions are attaches to proto', function () {
            expect(typeof StringBuilder.prototype.append === 'function').to.be.true;
            expect(typeof StringBuilder.prototype.prepend === 'function').to.be.true;
            expect(typeof StringBuilder.prototype.remove === 'function').to.be.true;
            expect(typeof StringBuilder.prototype.insertAt === 'function').to.be.true;
            expect(typeof StringBuilder.prototype.toString === 'function').to.be.true;
        })
    })

    describe('constructor tests', function () {

        it('is initilized without params', function () {
            expect(sb.toString()).to.be.equal('', 'Expected empty string')
        })

        it('is initilized without params', function () {
            sb = new StringBuilder('test');
            const expected = "test";

            expect(sb.toString()).to.be.equal(expected);
        })


    })

    describe('append tests', function () {
        it('is initilized with wrong parameter type ', function () {

            const errorFunc = () => {
                sb.append({
                    name: 'Pesho'
                });
            }
            expect(errorFunc).to.throw(TypeError)

        })

        it('is initilized with correct data ', function () {
            // Arrange
            const expected = 'test123';

            // Act
            sb.append('test123');

            //Assert
            expect(sb.toString()).to.be.equal(expected)
        })
    })

    describe('prepend tests', function () {
        it('is initilized with wrong parameter type ', function () {

            const errorFunc = () => {
                sb.prepend({
                    name: 'Pesho'
                });
            }
            expect(errorFunc).to.throw(TypeError)

        })

        it('is initilized with correct data ', function () {
            // Arrange
            const expected = 'test123';

            // Act
            sb.prepend('test123');

            //Assert
            expect(sb.toString()).to.be.equal(expected)
        })
    })

    describe('remove tests', function () {
        it('works correctly', function () {
            // Arrange
            const expected = 'Hllo from JS';

            // Act
            sb.append('Hello ');
            sb.append('from ');
            sb.append('JS');
            sb.remove(1, 1);

            //Assert
            expect(sb.toString()).to.be.equal(expected)

        })


    })

    describe('insertAt tests', function () {
        it('works correctly', function () {
            // Arrange
            const expected = 'Hello from JS';

            // Act
            sb.append('Hllo ');
            sb.append('from ');
            sb.append('JS');
            sb.insertAt('e', 1);

            //Assert
            expect(sb.toString()).to.be.equal(expected)

        })
        it('works correctly in start', function () {
            // Arrange
            const expected = 'eHello from JS';

            // Act
            sb.append('Hello ');
            sb.append('from ');
            sb.append('JS');
            sb.insertAt('e', 0);

            //Assert
            expect(sb.toString()).to.be.equal(expected)

        })

        it('works correctly in end', function () {
            // Arrange
            const expected = 'Hello!';

            // Act
            sb.append('Hello');
           
            sb.insertAt('!', 5);

            //Assert
            expect(sb.toString()).to.be.equal(expected)

        })


    })

    describe('toString tests', function () {
        it('works correctly', function () {

            sb.prepend('test123');


            //Assert
            expect(sb.toString()).to.be.equal('test123')

        })


    })
})