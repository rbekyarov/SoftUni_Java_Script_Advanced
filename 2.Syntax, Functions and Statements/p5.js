function solve(steps, lengthFootprint, speed) {
    //време?
    //разстояние?
    let distance = steps * lengthFootprint; //разстояние в метри
    let restCount = distance / 500;
    let timeRest = parseInt(restCount, 10);
    let seconds = (distance / speed / 1000 * 60 + timeRest) * 60; //време в секунди

    convertSeconds(seconds);

    function convertSeconds(seconds) {
        var convert = function(x) {
            return (x < 10) ? "0" + x : x;
        }
        let result = convert(parseInt(seconds / (60 * 60))) + ":" +
            convert(parseInt(seconds / 60 % 60)) + ":" +
            Math.round(convert(seconds % 60));

        console.log(result);
    }
}
solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);