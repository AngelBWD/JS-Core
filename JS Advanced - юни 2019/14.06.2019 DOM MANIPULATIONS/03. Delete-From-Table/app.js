function deleteByEmail() {
    let input = document.querySelector('input').value
    let result = document.querySelector('#result')
    let emails = [...document.querySelectorAll('td:nth-child(2)')]
    console.log(emails);

    let email = emails.find(td => td.textContent === input)

    if (email) {
        email.parentNode.remove()
        result.textContent = 'Deleted.'
        let input = document.querySelector('input').value = '';
    } else {
        result.textContent = 'Not found.'
        let input = document.querySelector('input').value = '';

    }

}