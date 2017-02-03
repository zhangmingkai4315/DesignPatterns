var Obj=function(){
    if(!(this instanceof Obj)){
        console.log("Create a new Object")
        return new Obj();
    }
    this.name="Mike";
    this.address="Beijing";
}
Obj.prototype={
    getName:function(){
        return this.name;
    },
    getAddress:function(){
        return this.address;
    },
    getInfo:function(){
        return this.name+" @ "+this.address;
    }
};


var o=Obj();
console.log(o.getInfo());
// Create a new Object
// Mike @ Beijing