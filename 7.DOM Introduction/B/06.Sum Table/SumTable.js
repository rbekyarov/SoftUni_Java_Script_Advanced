function sumTable() {
    let costElements = document.querySelectorAll('td');
    let arr = Array.from(costElements);
    arr.pop();
    let sum = 0;
    arr.forEach((x, i) => {
        if (i % 2 == 1) {
            sum += Number(x.textContent);
        }
    });
    let result = document.getElementById('sum');
    result.textContent = sum.toFixed(2);


}