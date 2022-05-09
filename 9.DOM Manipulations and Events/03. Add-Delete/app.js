function addItem() {
   
    let inputElement = document.getElementById('newItemText');
    let inputItemsElement = document.getElementById('items');

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    inputElement.value = '';


    let deleteElement = document.createElement('a');// създаваме делийт елемент
    deleteElement.href = '#';// задаваме линк
    deleteElement.textContent = '[Delete]';// добавяме текст
    deleteElement.addEventListener('click', (e) => { //добавяме евент на елемента
        e.currentTarget.parentElement.remove();
    });

    liElement.appendChild(deleteElement);
    inputItemsElement.appendChild(liElement);




}