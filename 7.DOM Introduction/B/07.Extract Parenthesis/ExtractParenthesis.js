function extract(content) {
    let contentElement = document.getElementById(content);

    let pattern = /\(([^(]+)\)/g;
    let matches = contentElement.textContent.matchAll(pattern);
    let result = [];
    for (const match of matches) {
        result.push(match[1])
    }

    // извън задачата - добавяне на ред с резултата в браузъра
    let resultElement = document.createElement('p');
    contentElement.appendChild(resultElement);
    resultElement.textContent = result.join('; ');
    return result.join('; ')
}