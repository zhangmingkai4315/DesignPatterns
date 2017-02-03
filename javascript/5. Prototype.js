var myCar ={
    name:"Fort",
    year:1990,
    drive:function(){
        console.log("I am driving...:%s",this.name);
    }
};

var yourCar = Object.create(myCar);

yourCar.drive();

var hisCar = Object.create(myCar,{
    "drive":{
        value:function(){
            console.log("Hi is driving...:%s",this.name);
        },
        enumerable:true,
    }
});

hisCar.drive();

// I am driving...:Fort
// Hi is driving...:Fort

var carPrototype ={
    drive:function(){
        console.log("I am driving...:%s",this.name);
    },
    stop:function(){
        console.log("I am stoping...:%s",this.name);
    },
    init:function(mode){
        this.name = mode;
    }
};

var vehicle = function(mode){
    function F(){};
    F.prototype=carPrototype;
    var v = new F();
    v.init(mode);
    return v;
};

var f= vehicle("Fort");

f.drive();
// I am driving...:Fort