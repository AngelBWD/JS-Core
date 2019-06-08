function solve(arr) {
    let input = arr;
    // let peopleInElement = document.querySelector("#peopleIn p");
    // let peopleOutElement = document.querySelector("#peopleOut p");
    // let blacklistElement = document.querySelector("#blacklist p");


    let peopleInList = [];
    let peopleOutList = [];
    let blacklist = [];

    for (let i = 0; i < input.length - 1; i++) {
        let currentPerson = {
            firstName: input[i].firstName,
            lastName: input[i].lastName
        };
        let command = input[i].action;
        if (command === "peopleIn") {
            let personInBlacklist = blacklist
                .find(p => p.firstName === currentPerson.firstName && p.lastName === currentPerson.lastName);
            if (!personInBlacklist) {
                peopleInList.push(currentPerson);

            }
        } else if (command === "peopleOut") {
            let personInList = peopleInList
                .find(p => p.firstName === currentPerson.firstName && p.lastName === currentPerson.lastName);

            if (personInList) {
                peopleInList.splice(peopleInList.indexOf(personInList), 1);
                peopleOutList.push(currentPerson);
            }
        } else if (command === "blacklist") {
            blacklist.push(currentPerson);
            let personInList = peopleInList
                .find(p => p.firstName === currentPerson.firstName && p.lastName === currentPerson.lastName);

            if (personInList) {
                peopleInList.splice(peopleInList.indexOf(personInList), 1);
                peopleOutList.push(currentPerson);
            }
        }
    }
    let sortCriteria = input[input.length - 1]["criteria"];
    let listName = input[input.length - 1]["action"];
    if (sortCriteria === "firstName" || sortCriteria === "lastName") {
        if (listName === "peopleIn") {
            peopleInList.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        } else if (listName === "peopleOut") {
            peopleOutList.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        } else if (listName === "blacklist") {
            blacklist.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        }
    }
    peopleInList.forEach(x => console.log(x));
    peopleOutList.forEach(x => console.log(x));
    blacklist.forEach(x => console.log(x));
    


}
solve([{
    "firstName": "Jon",
    "lastName": "Snow",
    "action": "peopleIn"
}, {
    "firstName": "Jonny",
    "lastName": "Bravo",
    "action": "peopleIn"
}, {
    "firstName": "John",
    "lastName": "Doe",
    "action": "peopleOut"
}, {
    "firstName": "Jon",
    "lastName": "Snow",
    "action": "peopleOut"
}, {
    "firstName": "John",
    "lastName": "Doe",
    "action": "peopleOut"
}, {
    "firstName": "Lenny",
    "lastName": "Kravitz",
    "action": "blacklist"
}, {
    "firstName": "Lenny",
    "lastName": "Kravitz",
    "action": "peopleIn"
}, {
    "firstName": "Marwin",
    "lastName": "Athelstein",
    "action": "peopleIn"
}, {
    "criteria": "lastName",
    "action": "peopleIn"
}]);