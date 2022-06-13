function solve(input) {
    let towns = [];

    for (let i = 1; i < input.length; i++) {
        const data = input[i].split(/\s*\|\s*/g);
        const town = data[1];
        const latitude = Number(data[2]).toFixed(2);
        const longitude = Number(data[3]).toFixed(2);

        const current = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }

        towns.push(current);
    }

    console.log(JSON.stringify(towns));
}