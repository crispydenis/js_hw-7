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
function Car(brand, model, number) {
    this.brand = brand;
    this.model = model;
    this.number = number;
    this.engineOn = false;
    this.transmission = "parking";
    this.speed = 0;
    this.distanceTraveled = 0;

    // двигатель вкл
    this.toEngineOn = function(){
        this.engineOn = !this.engineOn
        console.log('двигатель вкл')
    }



}

const myCar = new Car("Toyota", "A123BC");
