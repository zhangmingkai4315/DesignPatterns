function Car(model,year,miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString=function(){
    return this.model + " "+this.year+" "+this.miles;
}

var car1= new Car("HC",2009,20000);
var car2 = new Car("Ford",2010,5000);

console.log(car1.toString());
console.log(car2.toString());

// HC 2009 20000
// Ford 2010 5000

// 使用生成器模式可以构造具有不同属性的对象，用于实例化不同的对象。但是不同的对象应该具有共同的行为，比如上面使用的prototype去实现的共享函数。

