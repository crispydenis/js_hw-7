/* Использую полученные знания, реализуйте экземпляр любого объекта. Объект
должен иметь, как внутренние, так и доступные для пользователя, свойства и методы. 

Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
(ввод информации о скорости движения), расчет пройденных километров. */

function Car(brand, model, number) {
    this.brand = brand;
    this.model = model;
    this.number = number;
    this.engineOn = false;
    this.headlights = false;
    this.transmission = "parking";
    this.speed = 0;
    this.distance //не успеваю сделать
 

    // двигатель вкл/выкл
    this.toEngineOn = function () {
        this.engineOn = !this.engineOn;
        console.log(`Двигатель ${this.engineOn ? "включен" : "выключен"}.`);
    }

    // фары вкл/выкл
    this.onheadlights = function () {
        this.headlights = !this.headlights
        console.log(`Фары ${this.headlights ? 'вкл' : 'выкл'}`)
    }

    // скорость авто(не знаю как сделат чтобы снижалась скорость)
    this.tospeed = function () {
        if (this.engineOn) {
            if (this.speed < 5) {
                this.speed++;
                console.log(`Скорость ${this.speed * 20} км/ч`)
            }
            else
                console.log('Максимальная скорость 100км/ч')
        }
        else
            console.log(`включите двигатель`)
    }

    // автоматическое переключение передачи в зависимости от скорости
    this.totransmission = function () {
        if (this.speed === 0) {
            console.log(`Передача 1`)
        }
        if (this.speed === 1) {
            console.log(`Передача 2`)
        }
        if (this.speed === 2) {
            console.log(`Передача 3`)
        }
        if (this.speed === 3) {
            console.log(`Передача 4`)
        }
        if (this.speed === 4) {
            console.log(`Передача 5`)
        }
        if (this.speed === 5) {
            console.log(`Передача 6`)
        }
    }
}


let myCar = new Car("Porshe", "Panamera", "A998H178");

myCar.toEngineOn()
myCar.onheadlights()
myCar.tospeed()
myCar.tospeed()
myCar.tospeed()
// myCar.tospeed()
// myCar.tospeed()
// myCar.tospeed()
myCar.totransmission()

