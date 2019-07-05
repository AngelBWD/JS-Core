class FilmStudio {

    constructor(studioName) {
        this.name = studioName;
        this.films = [];
    }

    casting(actor, role) {
        let isTheActorIsUnemployed = true;
        let output;

        if (this.films.length) {

            for (let f of this.films) {

                let roles = f.filmRoles.filter((r) => r.role === role);

                if (roles.length) {
                    let filmIndex = this.films.indexOf(f);
                    let wantedRole = this.films[filmIndex].filmRoles.filter((fR) => fR.role === role)[0];
                    let roleIndex = this.films[filmIndex].filmRoles.indexOf(wantedRole);

                    this.films[filmIndex].filmRoles[roleIndex].actor = actor;
                    isTheActorIsUnemployed = false;
                    output = `You got the job! Mr. ${actor} you are next ${role} in the ${f.filmName}. Congratz!`;
                    break;
                }
            }

            if (isTheActorIsUnemployed) {
                output = `${actor}, we cannot find a ${role} role...`;
            }

        } else {
            output = `There are no films yet in ${this.name}.`;
        }

        return output;
    }

    makeMovie(filmName, roles) {

        if (arguments.length === 2) {

            let firstArgIsString = typeof arguments[0] === 'string';
            let secondArgIsArray = arguments[1] instanceof Array;

            if (firstArgIsString && secondArgIsArray) {
                let findedFilms = this.films.filter((f) => f.filmName.includes(filmName));

                let filmRoles = roles.reduce((acc, cur) => {
                    let curFilmRole = {
                        role: cur,
                        actor: false
                    };
                    acc.push(curFilmRole);
                    return acc;
                }, []);

                let film = {
                    filmName,
                    filmRoles
                };

                if (findedFilms.length > 0) {
                    film.filmName += ` ${++findedFilms.length}`;
                }

                this.films.push(film);
                return film;
            } else {
                throw ('Invalid arguments')
            }

        } else {
            throw ('Invalid arguments count')
        }
    }

    lookForProducer(film) {

        let f = this.films.filter((f) => f.filmName === film)[0];
        let output;

        if (f) {
            output = `Film name: ${f.filmName}\n`;
            output += 'Cast:\n';
            Object.keys(f.filmRoles).forEach((role) => {
                output += `${f.filmRoles[role].actor} as ${f.filmRoles[role].role}\n`;

            });
        } else {
            throw new Error(`${film} do not exist yet, but we need the money...`)
        }

        return output;
    }
}
const assert = require('chai').assert;

describe('FilmStudio', function () {
    let filmStudio;
    beforeEach(function () {
        filmStudio = new FilmStudio('Pesho');
    });


    it('testting constructor studio property', function () {
        assert.equal(filmStudio.name, 'Pesho')
    })

    it('testting constructor film property', function () {

        assert.deepEqual(filmStudio.films, [])
    })

    describe('Function makeMovie() ', function () {
        it('testing makeMovie filmName', function () {
            let result = filmStudio
                .makeMovie('IronMan', ['Tony Stark'])
            //console.log(result.filmName);
            assert.equal(result.filmName, 'IronMan')

        })

        it('testing makeMovie roles', function () {
            let result = filmStudio
                .makeMovie('IronMan', ['Tony Stark'])
            //  console.log(result.filmRoles);
            assert.deepEqual(result.filmRoles, [{
                role: 'Tony Stark',
                actor: false
            }])

        })

        it('testing with 3 parameters', function () {
            assert.throw(() => filmStudio.makeMovie('IronMan', ['Tony Stark'], 'test'), 'Invalid arguments count');
        })

        it('testing makeMovre with few arguments', function () {
            assert.throw(() => filmStudio.makeMovie(['Thor']), 'Invalid arguments count');
        })

        it('testing makeMovre with wrong arguments', function () {
            assert.throw(() => filmStudio.makeMovie(123, ['Thor']), 'Invalid arguments');
        })

        it('testing makeMovre with wrong second argument', function () {
            //console.log(filmStudio.makeMovie('IronMan','Thor'));  
            assert.throw(() => filmStudio.makeMovie('IronMan', 'Thor'), 'Invalid arguments');
        })


    })
    describe('lookForProducer() ', function () {
        it('testing lookForProducer for producer', function () {
            filmStudio.makeMovie('kflskf', ['Tony Stark']);
            // console.log(filmStudio.lookForProducer('IronMan'));  
            assert.throw(() => filmStudio.lookForProducer('IronMan'), 'IronMan do not exist yet, but we need the money...');
        })

        it('testing lookForProducer for producer with right arguments', function () {
            filmStudio.makeMovie('IronMan', ['Tony Stark']);
            //console.log(filmStudio.lookForProducer('IronMan'));
            assert.equal(filmStudio.lookForProducer('IronMan'), `Film name: IronMan\nCast:\nfalse as Tony Stark\n`)
        })

    })
    describe('casting() ', function () {
        it('testing casting fith wrong args', function () {
            filmStudio.makeMovie('IronMan', ['Tony Stark']);
             // console.log(filmStudio.casting('Tony Stark', 'Silvester'));

            assert.equal(filmStudio.casting('IronMan', 'Silvester'), `IronMan, we cannot find a Silvester role...`)
        })

        it('testing casting with right args', function () {
            filmStudio.makeMovie('IronMan', ['Tony Stark']);
            //  console.log(filmStudio.casting('Silvester', 'Tony Stark'));
            assert.equal(filmStudio.casting('Silvester', 'Tony Stark'), `You got the job! Mr. Silvester you are next Tony Stark in the IronMan. Congratz!`)
        })

        it('without film', function () {
             // console.log(filmStudio.casting('Silvester', 'Tony Stark'));
            assert.equal(filmStudio.casting('Silvester', 'Tony Stark'), `There are no films yet in Pesho.`)
        })

        
    })
})