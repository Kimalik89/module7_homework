function func(obj){
    for (let key in cars){
       if (cars.hasOwnProperty(key))
       console.log(key+ "-" +cars[key]);
   }
}
const myCars = {
   brand1: 'Mazda',
   brand2: 'Bmw',
   brand3: 'Opel'
}
const cars = Object.create(myCars)
cars.brand4 = 'Kia';
cars.brand5 = 'Porsche';
func(cars);