class Person {
    constructor(name = 'Anonimus', age = 0) {
        this.name = name
        this.age = age
        console.log(this.name)
    }

    getGreeting() {
        return `hi i am ${this.name}, and I am ${this.age} years old`;
    }

    getAge() {
        return this.age
    }
}


class Student extends Person{
    constructor(name, age, major){
        super(name,age); //calling parent's constructor function
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }

    getGreeting() {
        let greet =  `${super.getGreeting()} and I have ${this.major}`;
        return greet
    }
}

class Traveler extends Person {
    constructor(name, age, travel) {
        super();
        this.traver = travel
    }

    getGreeting() {
        let greet =super.getGreeting();
        console.log(greet+' '+this.traver)
    }

}

const me = new Traveler('Evgeny', 26, 'Voronezh');
console.log(me.getGreeting())
