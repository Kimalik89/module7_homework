function Electro(name, power, color) {
    this.name = name,
       this.power = power,
       this.color = color,
       this.enabled = false;
 }
 
 function Computer(name, power, color, processor) {
    this.name = name,
    this.power = power,
    this.color = color;
 }
 
 Computer.prototype = new Electro();
 
 function Teapot(name, power, color, bright) {
     this.name = name,
       this.power = power,
       this.color = color;
 }
 
 Teapot.prototype = new Electro();
 
 Electro.prototype.Enabled = function () {
    console.log(this.name + ' is on');
    this.enabled = true;
 }
 
 Electro.prototype.getPower = function () {
    return this.enabled ? this.power : 0;
 }
 
 const comp = new Electro('Computer', 100, 'white', 'intel');
 const teapot = new Electro('Teapot', 200, 'black');
 
 comp.Enabled();
 teapot.Enabled();
 
 function sum(arr) {
    let result = 0
    arr.forEach((item) => {
       result += item.getPower()
    })
    return result;
 }
 
 console.log(sum([comp, teapot]));
 