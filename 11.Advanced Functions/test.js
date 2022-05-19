let obj = {
    name: 'Peter',
    lastName: 'Petrov',
    greed() {
        const getFullName = () => {
            return `${this.name} ${this.lastName}`;
        }
        console.log(`My name is ${getFullName()}`);
    }
};
obj.greed();