var Person = function(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;

};
Person.prototype.show = function(){
        console.log(this.firstName+" "+this.lastName);
};

var clark = new Person("Clark","Kent");

var SuperMan = function (firstName,lastName,power){
    Person.call(this,firstName,lastName);
    this.power = power;

};

SuperMan.prototype = Object.create(Person.prototype,{
    "show":{
        value:function(){
            console.log(this.firstName+" "+this.lastName+":"+this.power.toString());
        },
        enumerable: true,
    configurable: true, 
    writable: true
    }
});
SuperMan.prototype.constructor = SuperMan;
var clark2 = new SuperMan("Clark","Kent",['flight','heat']);
clark2.show()

function Augment(receverClass,srcClass){
    var len = arguments.length;
    if(arguments[2]){
        // 提供了特殊的方法参数，如果只是提供两个类，默认全部混入
        for(var i=2;i<len;i++){
            receverClass.prototype[arguments[i]] = srcClass.prototype[arguments[i]];
        }
    }else{
        for (var method in srcClass.prototype){
            if(!Object.hasOwnProperty(receverClass.prototype,method)){
                receverClass.prototype[method]=srcClass.prototype[method];
            }
        }
    }
}









