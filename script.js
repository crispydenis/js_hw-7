/* Использую полученные знания, реализуйте экземпляр любого объекта. Объект
должен иметь, как внутренние, так и доступные для пользователя, свойства и методы. 

Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
(ввод информации о скорости движения), расчет пройденных километров. */



let Lamp = function(w, t, tt) {
    this.status = false;

    this.watt = w || 0;
    this.type = t || 0;
    this.temp = tt || 'white';
    this.color;
    this.timeOn;

    this.rgb = function(color) {
        this.color = color;
    };

    this.onOff = function() {
        this.status = !this.status;
        
        if (this.status) this.timeOn = new Date();
    };
};

let lamp1 = new Lamp('65w', '2', 'hot');
let lamp2 = new Lamp('100w', '1', 'white');
let lamp3 = new Lamp('18w', '2', 'hot');

lamp1.onOff()

// console.log(lamp1);
// console.log(lamp2);
// console.log(lamp3);

let car = function(){

}

// Конструктор объекта "Автомобиль"
function Car(brand, number) {
    // Внутренние свойства
    this.brand = brand;
    this.number = number;
    this.engineOn = false;
    this.transmission = "нейтральная";
    this.speed = 0;
    this.distanceTraveled = 0;
  
    // Метод для включения/выключения двигателя
    this.toggleEngine = function () {
      this.engineOn = !this.engineOn;
      console.log(`Двигатель ${this.engineOn ? "включен" : "выключен"}`);
    };
  
    // Метод для включения/выключения передачи
    this.toggleTransmission = function () {
      if (this.engineOn) {
        this.transmission =
          this.transmission === "вперед" ? "назад" : "вперед";
        console.log(`Передача: ${this.transmission}`);
      } else {
        console.log("Двигатель выключен. Включите двигатель.");
      }
    };
  
    // Метод для движения вперед или назад
    this.move = function (direction, speed) {
      if (this.engineOn) {
        this.transmission === direction
          ? console.log(`Движение ${direction} со скоростью ${speed} км/ч`)
          : console.log("Переключите передачу.");
        this.speed = speed;
        this.distanceTraveled += speed; // Просто для примера, можно добавить точный расчет расстояния
      } else {
        console.log("Двигатель выключен. Включите двигатель.");
      }
    };
  
    // Метод для расчета пройденных километров
    this.calculateDistance = function () {
      console.log(`Пройдено километров: ${this.distanceTraveled} км`);
    };
  }
  
  // Создание экземпляра объекта "Автомобиль"
  const myCar = new Car("Toyota", "A123BC");
  
  // Использование методов и свойств
  myCar.toggleEngine(); // Включение двигателя
  myCar.toggleTransmission(); // Включение передачи
  myCar.move("вперед", 40); // Движение вперед со скоростью 40 км/ч
  myCar.move("вперед", 60); // Движение вперед со скоростью 40 км/ч
  myCar.calculateDistance(); // Расчет пройденных километров
  myCar.toggleEngine(); // Выключение двигателя
  