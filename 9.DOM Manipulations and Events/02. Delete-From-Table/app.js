function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]').value;
    let data = Array.from(document.querySelectorAll('tr td:nth-of-type(2)'));
    let result = document.getElementById('result');
    for(let dataElement of data){
        inputElement.textContent = '';
        if(dataElement.textContent === inputElement){
            dataElement.parentNode.remove();
            result.textContent = 'Delited.'
            break;
        }else{
            result.textContent = 'Not found.'
            
        }
    }

    
}