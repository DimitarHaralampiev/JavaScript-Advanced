function create(words) {
    const content = document.getElementById('content');

    for (let i = 0; i < words.length; i++) {
        const createDiv = document.createElement('div');
        const createParagraph = document.createElement('p');

        createParagraph.textContent = words[i];
        createParagraph.style.display = 'none';
        createDiv.appendChild(createParagraph);
        content.appendChild(createDiv);
    }

    content.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'DIV' || ev.target.tagName === 'P') {
            const p = ev.target.children[0] || ev.target;
            const isVisible = p.style.display === 'block';
            p.style.display = isVisible ? 'none' : 'block';
        }
    })
}