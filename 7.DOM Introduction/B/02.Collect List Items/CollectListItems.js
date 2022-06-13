function extractText() {

    let liElement = document.querySelectorAll('li');
    let arr = Array.from(liElement);
    console.log(arr);
    let result = document.getElementById('result');
    for (const element of arr) {
        result.textContent += element.textContent + '\n'
    }
}