function toggle() {
    let button = document.querySelector('.button');
    let text = document.getElementById('extra');
    if (button.textContent === 'More') {
        text.style.display = 'inline'
        button.textContent = 'Less'
        text.style.display = 'block';
    } else {
        text.style.display = 'none'
        button.textContent = 'More'
    }

}