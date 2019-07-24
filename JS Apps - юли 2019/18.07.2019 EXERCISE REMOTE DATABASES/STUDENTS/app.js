(() => {
    const user = 'angel';
    const pass = 'angel';
    const headers = {
        "Authorization": `Basic ${btoa(`${user}:${pass}`)}`,
        "Content-Type": "application/json"
    }

    let studentsStorage = document.querySelector('tbody');

    let ID_inputs = document.getElementById('id');
    let firstName_Input = document.getElementById('firstName');
    let lastName_Input = document.getElementById('lastName');
    let facultyNumber_Input = document.getElementById('facultyNumber');
    let grade_Input = document.getElementById('grade');
    let addBtn = document.querySelector('form button');

    let loadBtn = document.getElementById('loadBtn');

    addBtn.addEventListener('click', addStudent);
    loadBtn.addEventListener('click', loadStudents);

    function addStudent(){
        if(ID_inputs === '' || firstName_Input.value === '' || lastName_Input.value === '' || facultyNumber_Input.value === '' || grade_Input.value === ''){
            return;
        }

        const URL = `https://baas.kinvey.com/appdata/kid_ryCZtVIGr/students`;

        let student = {
            id: ID_inputs.value,
            firstName: firstName_Input.value,
            lastName: lastName_Input.value,
            facultyNumber: facultyNumber_Input.value,
            grade: grade_Input.value
        }

        let body = JSON.stringify(student);

        fetch(URL, {
            method: 'POST',
            headers,
            body
        })
        .catch(err => console.log(err));

        displayStudent(student);
        
        ID_inputs.value = '';
        firstName_Input.value = '';
        lastName_Input.value = '';
        facultyNumber_Input.value = '';
        grade_Input.value = '';
    }

    function loadStudents(){
        studentsStorage.innerHTML = '';
        
        const url = `https://baas.kinvey.com/appdata/kid_ryCZtVIGr/students`;

        fetch(url, {
            headers
        })
        .then(response => response.json())
        .then(students => {
           for (const student of students.sort((a, b) => a.id - b.id)) {
                displayStudent(student);
           }
        })
        .catch(err => console.log(err));
    }

    function displayStudent(student){
        
        let tableRow = document.createElement('tr');
        studentsStorage.appendChild(tableRow);
        tableRow.innerHTML =
        `<td>${student.id}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.facultyNumber}</td>
        <td>${student.grade}</td>`;
    }
})()