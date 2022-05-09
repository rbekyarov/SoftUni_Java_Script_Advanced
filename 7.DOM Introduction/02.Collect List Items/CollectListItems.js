function extractText() {
    let ulElement = document.getElementById('items').textContent;
    console.log(ulElement);
    let rows = Array.from(ulElement);
    console.log(rows);
    for(el in rows){
        if(el.length !== 1 && !el.match(/[a-z]/i)){
           rows.shift();
        }
    }
    console.log(rows);
 
    let textareaElement = document.getElementById('result');
    textareaElement.textContent = ulElement;
}