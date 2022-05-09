function subtract() {
    
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;
    let result = document.getElementById('result');
    let substract = num1-num2;
    result.textContent = substract;
    
}