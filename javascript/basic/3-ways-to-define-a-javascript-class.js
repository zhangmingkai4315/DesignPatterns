function Apple(type){
    this.type = type;
    this.color="red";
    this.getInfo = getAppleInfo;
}

function getAppleInfo(){
    return this.color+' '+this.type+" Apple";
}
Apple.prototype.getColor=function(){
    return this.color;
};
var apple = new Apple("Macintosh");
apple.color="reddish";
console.log(apple.getInfo());
console.log(apple.getColor());
// $ node javascript/basic/3-ways-to-define-a-javascript-class.js
// reddish Macintosh Apple
// reddish

var apple2 = {
    type:"Macintosh",
    color:"red",
    getInfo:function(){
        return this.color+' '+this.type+" Apple";
    }
};

apple2.color="reddish";
console.log(apple2.getInfo());
// reddish Macintosh Apple

var apple3 = new function(){
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
};

apple3.color = "reddish";
console.log(apple3.getInfo());

// reddish macintosh apple


