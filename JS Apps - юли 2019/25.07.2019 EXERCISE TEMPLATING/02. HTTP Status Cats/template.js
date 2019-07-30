(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let templete = document.getElementById("cat-template").innerHTML;

        let compiled = Handlebars.compile(templete);

        let render = compiled({
            cats: window.cats
        });

        document.getElementById("allCats").innerHTML = render;

        let section = document.getElementById('allCats');
        section.addEventListener('click', showMoreInfo);

        function showMoreInfo(ev) {
            if (ev.target.className === 'showBtn') {
                if (ev.target.textContent === 'Hide status code') {
                    ev.target.textContent === 'Show status code';
                    ev.target.nextElementSibling.style.display = 'none';
                } else {
                    ev.target.textContent = 'Hide status code';
                    ev.target.nextElementSibling.style.display = 'block';
                }
            }

        }

    }
})()