function colorize() {
    let row = document.querySelectorAll('tr');
    let arr = Array.from(row);
    arr.shift();

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            const x = arr[i];
            x.style.background = "Teal";
        }
    }

    //arr.forEach((x, i) => {
    //    if (i % 2 != 0) {
    //        x.style.backgroundColor = 'teal';
    //    }
    // });

}