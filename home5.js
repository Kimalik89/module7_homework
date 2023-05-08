class Electro {
    constructor(name, power, color) {
       this.name = name,
          this.power = power,
          this.color = color,
          this.enabled = false
    }
    getPower() {
       return this.enabled ? this.power : 0;
    }
    toggleEnable() {
       this.enabled = !this.enabled
    }
 
    getInfo() {
       return `Устройство ${this.name} - ${this.enabled ? 'включено' : 'выключено'}, текущее потребление: ${this.getPower()} W`
    }
 }
 
 class Comp extends Electro {
    constructor(processor, power, name) {
       super(name, power),
          this.processor = processor,
          this.power = power,
          this.name = name
    }
 }
 
 class Teapot extends Electro {
    constructor(bright, power, name) {
       super(name, power),
          this.bright = bright,
          this.power = power,
          this.name = name
    }
 }
 
 function sum(arr) {
    let result = 0
    arr.forEach((item) => {
       result += item.getPower()
    })
    return result;
 }
 
 const comp = new Comp(4, 100, 'Computer');
 const teapot = new Teapot('bright', 200, 'Teapot');
 
 console.log(comp.getInfo());
 comp.toggleEnable();
 console.log(comp.getInfo());
 
 console.log(teapot.getInfo());
 teapot.toggleEnable();
 console.log(teapot.getInfo());
 
 
 console.log(`Общее потребление электроприборов ${sum([comp, teapot])} w`);
 