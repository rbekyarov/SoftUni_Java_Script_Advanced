function solve(width, height, color) {
    const rectangle = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1, color.length),
        calcArea() {
            return this.width * this.height;
        }
    }

    return rectangle;
}