function solve() {
    let text = document.getElementById('text').value;
    let groupSize = +document.getElementById('number').value;
   
    if (text.length % groupSize > 0) {
        let reaminder = text.length % groupSize;
        let charsToFill = groupSize - reaminder;
        text = text + text.substr(0, charsToFill);
    }
    let result = [];
    for (let i = 0; i < text.length; i += groupSize) {
        result.push(text.substr(i, groupSize))
    }
    
    
    document.getElementById("result").textContent=result.join(' ');

}