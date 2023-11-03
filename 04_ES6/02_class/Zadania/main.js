class Vehicle {
    constructor(type) {
        this.type = type;
    }
    sayHello() {
        return `Hi im ${this.type}`;
    }
}

class Boat extends Vehicle {
    sail() {
        return `${this.type} sail`;
    }
}

class Var extends Vehicle {
    drive() {
        return `${this.type} drive`;
    }
}

class Plane extends Vehicle {
    fly() {
        return `${this.type} fly`;
    }
}
const boat = new Boat("boat");
console.log(boat.sayHello())
console.log(boat.sail())




