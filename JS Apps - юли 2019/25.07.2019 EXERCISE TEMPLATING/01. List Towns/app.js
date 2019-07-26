function atacheEvents() {
    let loadTownBtn = document.getElementById('btnLoadTowns');

    loadTownBtn.addEventListener('click', loadTowns)

    function loadTowns() {

        let towns = document.getElementById('towns')
            .value
            .split(', ')
            .map(element => 
                ({name: element})
            );
        renderTowns(towns);

        function renderTowns(towns) {

            let template = document.getElementById('towns-tamplete').innerHTML;
            let compliled = Handlebars.compile(template);
            let rendered = compliled({
                towns
            });

            document.getElementById('root').innerHTML = rendered;

        }

    }
}
atacheEvents()