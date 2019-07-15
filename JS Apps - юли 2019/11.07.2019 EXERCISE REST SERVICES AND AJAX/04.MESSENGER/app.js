function attachEvents() {


    let send = document.getElementById('submit');
    let refresh = document.getElementById('refresh');
    let messages = document.getElementById('messages');
    let url = `https://rest-messanger.firebaseio.com/messanger.json`;



    refresh.addEventListener("click", function () {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {

                let AllMassage = Object.values(data).map(message => `${message.author}: ${message.content}`);
                messages.value = AllMassage.join('\n');

            })

    })

    send.addEventListener("click", function () {

        let name = document.getElementById('author').value;
        let content = document.getElementById('content').value;

        let post = {
            author: name,
            content
        };


        fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(post)
            })
            .then((response) => response.json());

    });
}

attachEvents();