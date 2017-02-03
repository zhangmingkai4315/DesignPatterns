var Car =function(options){
    this.doors = options.doors||4;
    this.state = options.state||"new";
    this.color = options.color||"silver";
};
Car.prototype.Show = function(){
    console.log(this.doors + this.state + this.color)
};
var Truck = function(options){
    this.color = options.color||"blue";
    this.wheelSize = options.wheelSize||"large";
    this.state = options.state||"used";
};
Truck.prototype.Show = function(){
    console.log(this.wheelSize + this.state + this.color)
}

var VehicleFactory = function(type){
    if(type === 'car'){
        this.vehicleClass = Car;
    }else{
        this.vehicleClass =Truck;
    }

}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.CreateVehicle = function(options){
    if(!options){
        options ={};
    }
    return new this.vehicleClass(options)
};

var carFactory = new VehicleFactory("car");
var car = carFactory.CreateVehicle();

var truckFactory = new VehicleFactory();
var truck = truckFactory.CreateVehicle();

car.Show();
truck.Show();

// 4newsilver
// largeusedblue