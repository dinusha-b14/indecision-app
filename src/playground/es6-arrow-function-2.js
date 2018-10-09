// arguments object - no longer bound

const add = (a, b) => {
    return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Dan',
    cities: ['Sydney', 'Melbourne', 'Adelaide'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [6, 7],
    multiplyBy: 8,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
