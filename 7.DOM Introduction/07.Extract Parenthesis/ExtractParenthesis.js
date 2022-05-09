function extract(content) {
    let patern = /\((.*?)\)/g;
    let matched = patern.exec(document.getElementById(content).textContent);
    let result = '';

    while(matched){
        result += matched[1] + '; ';
        matched = patern.exec(document.getElementById(content).textContent);
    }
    return result;
}