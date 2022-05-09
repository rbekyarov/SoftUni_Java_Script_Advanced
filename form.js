function calc(){
    let name = document.getElementById('Име');
    let yars  = document.getElementById('Години');
    let mail = document.getElementById('Email');
    let pElements = document.getElementById('result')
    mail.backgroundColor = "red";
    pElements.value = (`Добре дошли ${name.value} вие сте на  ${yars.value} години, и сте регистриран с имейл ${mail.value}`);

   
    //return pElements;

    
}