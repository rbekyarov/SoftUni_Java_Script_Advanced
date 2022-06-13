function solve() {
    let text = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    let str = text.toLowerCase();
    let res = '';
    if (convention === 'Camel Case') {
        for (let i = 0; i < str.length; i++) {
            let currentSymbol = str[i]
            if (currentSymbol === ' ') {
                currentSymbol = str[i + 1].toUpperCase();
                i++;
            }
            res += currentSymbol
        }
        result.textContent = res;

    } else if (convention === 'Pascal Case') {
        for (let i = 0; i < str.length; i++) {
            let currentSymbol = str[i]
            if (i == 0) {
                currentSymbol = str[i].toUpperCase();
            }
            if (currentSymbol === ' ') {
                currentSymbol = str[i + 1].toUpperCase();
                i++;
            }
            res += currentSymbol
        }
        result.textContent = res;

    } else {
        result.textContent = 'Error!'
    }
}