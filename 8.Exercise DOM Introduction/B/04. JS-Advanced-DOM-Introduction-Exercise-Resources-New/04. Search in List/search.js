function search() {
    let list = document.querySelectorAll('li');
    let arr = Array.from(list);
    console.log(arr);
    let input = document.getElementById('searchText').value;
    let count = 0;
    for (const element of arr) {
        if (element.textContent.includes(input) && element.textContent != '') {
            element.style.fontWeight = 'bold';
            element.style.textDecoration = 'underline';
            count++;
        } else {
            element.style.fontWeight = 'normal';
            element.style.textDecoration = 'none';
        }
    }
    let result = document.getElementById('result');
    result.textContent = `${count} matches found`
}