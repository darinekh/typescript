// Implémentation de la classe Car qui suit l'interface Vehicle
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Création d'une instance de Car et appel de la méthode start
var myCar = new Car("Toyota", "Corolla", 2023);
myCar.start(); // Affiche : "Car engine started"
