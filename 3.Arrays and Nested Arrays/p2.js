function solve(n, k) {

    let arr = [1];

    for (let i = 0; i < n - 1; i++) {

        let sum = 0;

        for (let j = 0; j < k; j++) {

            if (j >= arr.length) {
                continue;
            }
            sum += arr[arr.length - 1 - j];

        }
        arr.push(sum);
    }
    console.log(arr);
}

solve(6, 3);
solve(8, 2);