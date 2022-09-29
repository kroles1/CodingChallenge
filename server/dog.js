const dogsData = require('./data')

class Dog {
    constructor(data) {
        this.id = data.id;
        this.url = data.url;
        this.breed = data.breed;
        this.snippet = data.snippet;
        this.link = data.link;
    }
    static get all() {
        const dogs = dogsData.map( dog => new Dog(dog));
        return dogs;
    }

    static random() {
        const random =  dogsData[Math.floor(Math.random()*10)]
        return random
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
