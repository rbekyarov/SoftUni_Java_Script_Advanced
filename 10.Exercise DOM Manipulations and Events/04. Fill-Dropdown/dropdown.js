function addItem() {
    let textElement = document.getElementById('newItemText').value;
    let valueElement = document.getElementById('newItemValue').value;

    let newSelect = document.createElement('option');
    newSelect.text = textElement;
    newSelect.value = valueElement;
    //console.log(newSelect.localName)
    let select = document.getElementById('menu');
    if (textElement !== '' && valueElement !== ''){
        select.appendChild(newSelect);
    }
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';


}