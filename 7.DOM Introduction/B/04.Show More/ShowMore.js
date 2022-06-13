function showText() {
    let more = document.getElementById('more');
    let text = document.getElementById('text');
    text.style.display = 'inline';
    more.style.display = 'none';
    //добавяне на less - извън задачата
    let less = document.createElement("a");

    less.setAttribute('href', '#');
    less.setAttribute('id', 'more1');
    less.textContent = 'less';
    less.style.display = 'inline';
    text.appendChild(less);
    less.addEventListener('click', function() {
        text.style.display = 'none';
        more.style.display = 'inline';
        less.textContent = '';
    });

}