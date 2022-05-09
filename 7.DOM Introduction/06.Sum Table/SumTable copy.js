function sumTable() {

    let test = document.querySelectorAll('.i').value;
    console.log(test);
    let sum1 = Array.from(test).reduce((a, x) => {
        let currentValue = Number(x.textContent) || 0;
        return a + currentValue;
    }, 0);
    console.log(sum1);
    let firstNumberElement1 = document.getElementById('Beer');
    let firstNumberElement2 = document.getElementById('Fries');
    let firstNumberElement3 = document.getElementById('Burger');
        let sum = Number(firstNumberElement1.value)+Number(firstNumberElement2.value)+Number(firstNumberElement3.value);
    

    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
}