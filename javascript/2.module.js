var myModule = {
    key1:"value1",
    config:{
        key:"valueConfig"
    },
    method1:function(){
        return this.config.key;
    },
    method2:function(config){
        if(typeof config ==="object"){
            this.config = config;
            return;
        }
        return;
    }
};

console.log(myModule.method1());
myModule.method2({key:"newConfig"});
console.log(myModule.method1());
// valueConfig
// newConfig

// 使用模块模式去处理配置文件等，或者去处理公有和私有对象，提供整体的接口给调用者使用，由于js本身不存在私用属性，因此我们可以利用闭包的方式来处理。

var CounterModule = function(){
    var counter = 0;
    return {
        getCounter:function(){
            return counter;
        },
        resetCounter:function(){
            console.log("Reset counter to zero");
            counter =0;
        },
        incrementCounter :function(){
            counter+=1;
        }
    }
};

var counter = CounterModule();

counter.incrementCounter();
counter.incrementCounter();
console.log(counter.getCounter());
counter.resetCounter();
console.log(counter.getCounter());
// 2
// Reset counter to zero
// 0

// 混入模式，是在模块模式的基础上发展出来的，主要是通过引入其他的模块来完成自定义的一些操作。
var jQuery ={};
var _ ={};
var CustomModule = (function($,_){
// 
return{
    CustomMethod:function(){
        // 使用jquery或者underscore完成自定义的方法。

    }
}
})(jQuery,_);

// 使用模块模式的优点是： 可以自定义设置不同的访问属性，暴漏api接口，使得编写js代码更加面向对象。
// 缺点是:对于私有方法的后期维护可能比较困难，有时候需要修改很多的代码。



var CounterModule2 = function(){
    var counter = 0;
    var getCounter=function(){
            return counter;
    };
    var resetCounter=function(){
            console.log("Reset counter to zero");
            counter =0;
    };
    var incrementCounter = function(){
            counter+=1;
    };
    return {
        get:getCounter,
        reset:resetCounter,
        inc:incrementCounter,

    };
};
var counter = CounterModule2();

counter.inc();
counter.inc();
console.log(counter.get());
counter.reset();
console.log(counter.get());

// 2
// Reset counter to zero
// 0