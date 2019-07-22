const kinveyUsername = 'guest';                                                             
const kinveyPassword = 'guest';                                                                 
const appKey = 'kid_BJ3G2YZzH';
const appSecret = '846a5b8bd84d47b1a99d372320136f01';

const baseUrl = 'https://baas.kinvey.com/appdata/kid_BJ3G2YZzH/books';

const elements = {
    btnSubmit: document.querySelector('#submitBtn'),
    btnLoadBooks: document.querySelector('#loadBooks'),
    btnDoneEdit: document.querySelector('#editBtn'),
    btnCancelEdit: document.querySelector('#cancelBtn'),
    inputTitle: document.querySelector('#title'),
    inputAuthor: document.querySelector('#author'),
    inputIsbn: document.querySelector('#isbn'),
    tbodybooks: document.querySelector('.tbodyBooks'),
    h3Form: document.querySelector('#formHeader'),
};

elements.btnSubmit.addEventListener('click', addBook);
elements.btnLoadBooks.addEventListener('click', loadBooks);
elements.btnDoneEdit.addEventListener('click', editBook);
elements.btnCancelEdit.addEventListener('click', cancelEdit);

function addBook(ev) {
    ev.preventDefault();

    let title = elements.inputTitle.value;
    let author = elements.inputAuthor.value;
    let isbn = elements.inputIsbn.value;

    if (title && author && isbn) {
        const dataObject = {
            Title: elements.inputTitle.value,
            Autor: elements.inputAuthor.value,
            isbn: elements.inputIsbn.value
        }

        const headers = {
            method: "POST",
            body: JSON.stringify(dataObject),
            credentials: 'include',
            Authorization: 'Basic ' + btoa(`${kinveyUsername}:${kinveyPassword}`),
            headers: {
                "Content-type": "application/json"
            }
        };

        fetch(baseUrl, headers)
            .then(handler)
            .then(loadBooks)
            .catch(err => console.log(err));
    }
    clearElementValue(elements.inputIsbn, elements.inputTitle, elements.inputAuthor)
}

function loadBooks() {
    const headers = {
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
    }

    fetch(baseUrl, headers)
        .then(handler)
        .then((data) => {
            elements.tbodybooks.innerHTML = '';

            data.forEach(book => {
                let trNextBook = document.createElement('tr');
                trNextBook.setAttribute('id', book._id);

                trNextBook.innerHTML = `<td>${book.Title}</td> 
                <td>${book.Autor}</td>
                <td>${book.isbn}</td>
                <td> 
                    <button class="btnEdit" value =${book._id}>Edit</button>
                    <button class="btnDelete" value =${book._id}>Delete</button>
                </td>`

                trNextBook.querySelector('button.btnEdit')
                    .addEventListener('click', () => loadEditForm(book._id))

                trNextBook.querySelector('button.btnDelete')
                    .addEventListener('click', () => deleteBook(book._id))

                elements.tbodybooks.appendChild(trNextBook);
            })
        })
        .catch(err => console.log(err));
}

function loadEditForm(bookId) {
    let dataToEdit = document.getElementById(bookId)
        .querySelectorAll('td');

    elements.inputTitle.value = dataToEdit[0].textContent;
    elements.inputAuthor.value = dataToEdit[1].textContent;
    elements.inputIsbn.value = dataToEdit[2].textContent;

    elements.h3Form.textContent = 'EDIT BOOK';

    elements.btnSubmit.style.display = "none";
    elements.btnDoneEdit.style.display = "block";
    elements.btnCancelEdit.style.display = "block";

    elements.btnDoneEdit.value = bookId;
}


function editBook(ev) {
    ev.preventDefault();

    let bookId = ev.target.value;

    ev.target.value = '';


    const bookData = {
        Title: elements.inputTitle.value,
        Autor: elements.inputAuthor.value,
        isbn: elements.inputIsbn.value
    };

    let editUrl = `${baseUrl}/${bookId}`;

    let headers = {
        method: "PUT",
        body: JSON.stringify(bookData),
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
        headers: {
            "Content-type": "application/json"
        },
    };

    fetch(editUrl, headers)
        .then(handler)
        .then(loadBooks)
        .catch(err => console.log(err));

    fromEdittoSubmitForm();


}

function cancelEdit(ev) {
    ev.preventDefault();
    fromEdittoSubmitForm();
}

function fromEdittoSubmitForm() {
    clearElementValue(elements.inputIsbn, elements.inputTitle, elements.inputAuthor)
    elements.h3Form.textContent = "FROM";

    elements.btnSubmit.style.display = "block";
    elements.btnDoneEdit.style.display = "none";
    elements.btnCancelEdit.style.display = "none";

}

function clearElementValue(...arguments) {
    arguments.forEach(element => {
        element.value = '';
    })
}

function deleteBook(bookId) {
    let deleteUrl = `${baseUrl}/${bookId}`;

    let headers = {
        method: "DELETE",
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
        headers: {
            "Content-type": "application/json"
        },
    };

    fetch(deleteUrl, headers)
        .then(handler)
        .then(loadBooks)
        .catch(err => console.log(err));

}


function handler(response) {
    if (response.status > 400) {
        throw new Error(`Something went wrong.Eroro: ${response.statusText}`);
    }
    return response.json();
}