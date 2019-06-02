function solve() {
    let word = document.getElementById('word').value;
    let text = document.getElementById('text').value;
    let resultElement = document.getElementById('result');
    let parts = JSON.parse(text);
    let wordToPlace = parts[0].split(' ')[2];
    let pattern = new RegExp(wordToPlace, 'gi');
    parts = parts.map(part => part.replace(pattern, word));
    parts.forEach(part => {
        let p = document.createElement('p');
        resultElement.appendChild(p);
        p.textContent = part;
    });
}