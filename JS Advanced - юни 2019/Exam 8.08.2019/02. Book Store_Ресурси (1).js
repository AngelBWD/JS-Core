class BookStore {
    constructor(name) {
        this.name = name;
        this.books = [];
        this._workers = [];
    }

    get workers() {
        return this._workers;
    }

    stockBooks(newBooks) {
        newBooks.forEach((book) => {
            let [title, author] = book.split('-');
            this.books.push({
                title,
                author
            });
        });

        return this.books;
    }

    hire(name, position) {
        let worker = this.workers.filter(w => w.name === name)[0];
        if (!worker) {
            worker = {
                name: name,
                position: position,
                booksSold: 0
            };
            this.workers.push(worker);
        } else {
            throw new Error('This person is our employee');
        }
        return `${name} started work at ${this.name} as ${position}`
    }

    fire(name) {
        let worker = this.workers.filter(w => w.name === name)[0];
        if (!worker) {
            throw new Error(`${name} doesn't work here`);
        }
        let index = this.workers.indexOf(worker);
        this.workers.splice(index, 1);
        return `${name} is fired`;
    }

    sellBook(title, workerName) {
        let book = this.books.filter(b => b.title === title)[0];
        if (!book) {
            throw new Error('This book is out of stock');
        }

        let worker = this.workers.filter((w) => w.name === workerName)[0];
        if (!worker) {
            throw new Error(`${workerName} is not working here`)
        }

        this.books = this.books.filter(b => b.title !== title);
        this.workers.filter(w => w.name === workerName).map(w => w.booksSold++);
    }

    printWorkers() {
        let result = "";
        this.workers.forEach(w => {
            result += `Name:${w.name} Position:${w.position} BooksSold:${w.booksSold}\n`;
        })
        return result.trim();
    }
}

const assert = require('chai').assert;

describe('BookStore', function () {
    let bookStore;
    beforeEach(function () {
        bookStore = new BookStore('Angel');
    });

    it('testting constructor bookStore property', function () {
        assert.equal(bookStore.name, 'Angel')
    })

    it('testting constructor books property', function () {
        assert.deepEqual(bookStore.books, [])
    })

    it('testting constructor _workers property', function () {
        assert.deepEqual(bookStore._workers, [])
    })

    it('Contains a property books that is initialized to an empty array', function () {
        assert.isArray(bookStore.books);
        assert.isEmpty(bookStore.books);
    })

    it('Contains a property _workers that is initialized to an empty array', function () {
        assert.isArray(bookStore._workers);
        assert.isEmpty(bookStore._workers);
    })

    it('Function stockBooks()', function () {
        assert.deepEqual(bookStore.stockBooks(['kniga1']), [{
            title: 'kniga1',
            author: undefined
        }])
    })

    it('Function stockBooks() with 2 books', function () {
        assert.deepEqual(bookStore.stockBooks(['kniga1', 'kniga2']), [{
                title: 'kniga1',
                author: undefined
            },
            {
                title: 'kniga2',
                author: undefined
            }
        ])
    })

    it('Function stockBooks() with autor', function () {
        assert.deepEqual(bookStore.stockBooks(['kniga1-pesho']), [{
            title: 'kniga1',
            author: 'pesho'
        }])
    })

    it('Function stockBooks() with 2 autor', function () {
        assert.deepEqual(bookStore.stockBooks(['kniga1-pesho-asen']), [{
            title: 'kniga1',
            author: 'pesho'
        }])
    })

    it('Function hire()', function () {
        assert.equal(bookStore.hire('angel', 'writer'), 'angel started work at Angel as writer')
    })

    it('Function hire() with 1 param', function () {
        assert.equal(bookStore.hire('angel'), 'angel started work at Angel as undefined')
    })

    it('Function hire() with wrong params', function () {
        assert.equal(bookStore.hire(5, 5), '5 started work at Angel as 5')
    })

    it('Function hire() with 2 wrong params', function () {
        assert.equal(bookStore.hire(5, {}), '5 started work at Angel as [object Object]')
    })

    it('Function hire() with 2 wrong params', function () {
        assert.equal(bookStore.hire({}, {}), '[object Object] started work at Angel as [object Object]')
    })

    it('Function hire() with person whose  employee', function () {
        bookStore.hire('pesho', 'writer')
        assert.throw(() => bookStore.hire('pesho', 'writer'), 'This person is our employee');
    })

    it('Function fire() ', function () {
        assert.throw(() => bookStore.fire('pesho'), "pesho doesn't work here");
    })

    it('Function fire() with 2 wrong params', function () {
        bookStore.hire('pesho', 'writer')
        assert.equal(bookStore.fire('pesho'), 'pesho is fired')
    })

    it('Function fire() with wrong without params', function () {
        bookStore.hire('pesho', 'writer')
          assert.throw(() => bookStore.fire(), "undefined doesn't work here");
    })

    it('printWorkers()', function () {
        assert.equal(bookStore.printWorkers(),'')
    })

    it('printWorkers() with writers', function () {
         bookStore.hire('pesho', 'writer')
         assert.equal(bookStore.printWorkers(),'Name:pesho Position:writer BooksSold:0')
     })

     it('printWorkers() with  2 posts', function () {
        bookStore.hire('pesho', 'writer')
        bookStore.hire('ivan', 'programer')
        assert.equal(bookStore.printWorkers(),'Name:pesho Position:writer BooksSold:0\nName:ivan Position:programer BooksSold:0')
    })

    it('sellBook()', function () {
        bookStore.stockBooks(['kniga1-pesho'])
          assert.throw(() => bookStore.sellBook('kniga2','programer'), "This book is out of stock");
    })

    it('sellBook() BooksSold', function () {
         bookStore.stockBooks(['kniga1-pesho'])
         bookStore.hire('pesho', 'programer')
         bookStore.sellBook('kniga1','pesho');
         assert.equal(bookStore.printWorkers(),'Name:pesho Position:programer BooksSold:1')
    })
    
    it('sellBook() BooksSold', function () {
        bookStore.stockBooks(['kniga1-pesho'])
        bookStore.hire('pesho', 'programer')
        bookStore.sellBook('kniga1','pesho');
        assert.equal(bookStore.printWorkers(),'Name:pesho Position:programer BooksSold:1')
 
   })

    it('sellBook() BooksSold', function () {
        bookStore.stockBooks(['kniga1-pesho'])
        bookStore.stockBooks(['kniga2-angel'])

        bookStore.hire('pesho', 'programer')
        bookStore.sellBook('kniga1','pesho');

        bookStore.hire('angel', 'no')
        bookStore.sellBook('kniga2','angel');

        assert.equal(bookStore.printWorkers(),'Name:pesho Position:programer BooksSold:1\nName:angel Position:no BooksSold:1')
   })

    it('sellBook() 2', function () {
        bookStore.stockBooks(['kniga1-pesho'])
        bookStore.hire('ivan', 'programer')
         assert.throw(() => bookStore.sellBook('kniga1','pesho'), "pesho is not working here");
   })



});