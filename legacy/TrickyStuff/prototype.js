// contructor function
function Person(name){
    this.name = name;
}

// this is an object created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

// since we used the new keyword, we have established
// a link between the object and the prototype property 
// we can access that using __proto__

elie.__proto__ === Person.prototype; // true
colt.__proto__ === Person.prototype; // true

// The Person.prototyé object also has property
// called constructor which points to the function

Person.prototype.constructor === Person; // true

Person.prototype.isInstructor = true;

elie.isInstructor; // true
colt.isInstructor; // true

arr.hasOwnProperty('length') // true

// Exercise
function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function (){
    this.isRunning = false;
}

Vehicle.prototype.honk = function(){
    if(this.isRunning){
        return "beep!";
    }
}


