const dogsData = require('./data')

class Dog {
    constructor(data) {
        this.id = data.id;
        this.breed = data.breed;
        this.snippet = data.snippet;
        this.link = data.link;
    }
    static get all() {
        const dogs = dogsData.map( dog => new Dog(dog));
        return dogs;
    }

    static findById(id) {
            const dogData = dogsData.filter((dog) => dog.id === id)[0];
        if (!dogData){
            return ('This dog does not exist!');
            }
        const dog = new Dog(dogData);
        return dog;
    }
}



module.exports = Dog;
