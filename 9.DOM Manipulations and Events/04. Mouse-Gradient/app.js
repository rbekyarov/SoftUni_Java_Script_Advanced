function attachGradientEvents() {

    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    let funcEventHandler = (e) => {
        
        let whithBar = e.target.offsetWidth;// вземаме дължината на бара
        let currentMousePointer = e.offsetX;// вземаме позицията на мишката върху бара
        let percent = currentMousePointer / whithBar * 100; // превръщаме в %
        
        resultElement.textContent =`${Math.floor(percent)}%`;
        
    };

    gradientElement.addEventListener('mousemove', funcEventHandler);

}