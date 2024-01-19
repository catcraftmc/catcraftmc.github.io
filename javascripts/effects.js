function applyWaveClass(elementId) {
    const element = document.getElementById(elementId);

    if (element.tagName.toLowerCase() !== 'span') {
        console.error('The provided element is not a <span> element.');
        return;
    }

    const text = element.textContent;
    const characters = text.split('');
    let delay = 0;

    const wrappedCharacters = characters.map(char => {
        if (char === ' ') {
            return char; // Keep spaces as is to maintain word separation
        }
        const spanElement = `<span class="wave" style="animation-delay: ${delay}s;">${char}</span>`;
        delay += 0.1; // Increment the delay for each character
        return spanElement;
    });

    element.innerHTML = wrappedCharacters.join('');
}

applyWaveClass('my-text');
