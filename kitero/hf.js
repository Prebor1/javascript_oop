//A tetszoleges pelda (kb korulirva): Egy Auto osztaly, mely ha kap egy "driveKm" parancsot, akkor a kmTraveled valtozot novelni fogja.

class Car { //alapos pelda
  constructor(name) { //
    this.name = name;
    this.kmTraveled = 0;
  }

  driveKm() {
    this.kmTraveled++;
  }
}

const car1 = new Car("Audi");
car1.driveKm();
car1.driveKm();
console.log(car1);

class CarWithBattery extends Car {
  constructor(name) {
    super(name); //a super(name) azt jelenti hogy az osztaly szulojenek a konstruktorat hivjuk meg, es atadjuk neki a name parameter erteket.
    this.batteryLevel = 0;
  }

  charge() {
    this.batteryLevel++;
  }
}

const car2 = new CarWithBattery("Tesla");
car2.driveKm();
car2.charge();
console.log(car2);




//functionos pelda
function CarFunc(name) {

  this.name = name;
  this.kmTraveled = 0;
}

CarFunc.prototype.driveKm = function () {

  this.kmTraveled++;
};

const car3 = new CarFunc("BMW");
car3.driveKm();
console.log(car3);

function CarWithBatteryFunc(name) {

  CarFunc.call(this, name);
  this.batteryLevel = 0;
};

Object.setPrototypeOf(CarWithBatteryFunc.prototype, CarFunc.prototype); //ez azt csinalja, hogy a CarWithBatteryFunc prototipusa a CarFunc prototipusara mutat, 
// ami azt jelenti hogy a CarWithBatteryFunc peldanyai (objektumai) elerik a CarFunc prototipusaban levo metodusokat.

CarWithBatteryFunc.prototype.charge = function () {
  this.batteryLevel++;
};

const car4 = new CarWithBatteryFunc("Nissan");

car4.driveKm();
console.log(car4);

car4.charge();
console.log(car4);