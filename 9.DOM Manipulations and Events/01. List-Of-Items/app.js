function addItem() {
    let input = document.getElementById('newItemText');
    let itemElement = document.getElementById('items');
    
    let newElement = document.createElement('li');
    newElement.textContent = input.value;
    
    itemElement.appendChild(newElement);
}