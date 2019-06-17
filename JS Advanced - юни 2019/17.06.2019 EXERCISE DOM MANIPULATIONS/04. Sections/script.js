function create(words) {
   for (const el of words) {
      let paragraph = document.createElement('p');
      let container = document.getElementById('content');
      paragraph.textContent = el;
      let myDiv = document.createElement('div');
      myDiv.appendChild(paragraph);
      container.appendChild(myDiv)
      paragraph.style.display = "none";

      myDiv.addEventListener('click', () => {
         paragraph.style.display = "block"
      })

   }
}