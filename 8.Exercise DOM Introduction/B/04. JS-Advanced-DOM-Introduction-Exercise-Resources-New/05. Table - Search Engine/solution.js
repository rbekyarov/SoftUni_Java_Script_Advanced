function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let input = document.getElementById('searchField').value;
        let data = document.querySelectorAll('tbody tr');
        let arr = Array.from(data);
        for (let e of arr) {
            e.classList.remove('select');
            if (e.textContent.includes(input)) {
                e.className = 'select';
            }
            input.value = '';
        }



    }
}