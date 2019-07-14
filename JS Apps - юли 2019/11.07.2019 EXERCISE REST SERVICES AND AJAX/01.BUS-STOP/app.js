function getInfo() {
    let inputValue = document.getElementById('stopId').value;
    let url = `https://judgetests.firebaseio.com/businfo/${inputValue}.json`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('stopName').textContent = data.name;
            document.getElementById('buses').innerHTML = '';
            let buses = Object.entries(data.buses)

            for (const [busNumber, busTime] of buses) {
                let listText = document.createElement('li');
                listText.textContent = `Bus ${busNumber} arrives in ${busTime} minutes`;
                document.getElementById('buses').appendChild(listText)
            }
        })
        .catch(error => {
            document.getElementById('stopName').textContent = 'Error!'
        });
        document.getElementById('stopId').value = '';



}