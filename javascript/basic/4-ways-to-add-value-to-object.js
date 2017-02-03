var Apple = function(){
    this.name = 'apple';
};

var apple = new Apple()
apple['color']="red";
apple.size = "bigsize";
apple.getInfo=function(){
return this.color+" apple"+" From: "+this.from+" to: "+this.dest+" price: "+this.price;
};
Object.defineProperty(apple,"from",{
    value:"China",
    writable:true,
    enumerable:true,
    configurable:true,
});
Object.defineProperties(apple,{
"price":{
    value:100,
    writable:true,
    enumerable:true,
    configurable:true
    }
},{
"dest":{
    value:"USA",
    writable:false
    }
});
console.log(apple.getInfo());

// configurable : 是否可以被删除和修改。
// enumerable： 是否可以在枚举对象的时候显示。
// value: 可以是任何的js值 数值对象函数等等。

//  writable: 是否可以被修改。，
