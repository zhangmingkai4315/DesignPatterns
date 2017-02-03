function ObserverList(){
    this.observerlist=[];
}
ObserverList.prototype.Add=function(obj){
    return this.observerlist.push(obj);
};

ObserverList.prototype.Empty=function(){
    this.observerlist=[];
};
ObserverList.prototype.Get=function(index){
    if(index>-1 && index < this.observerlist.length){
        return this.observerlist[index];
    }
};
ObserverList.prototype.Count=function(){
    return this.observerlist.length;
};
ObserverList.prototype.Insert = function(obj,index){
    var pointer = -1;
    if(index>-1 && index <this.observerlist.length){
        this.observerlist.splice(index, 0, obj);
        pointer=index;
    }
    return pointer;
};

ObserverList.prototype.RemoveIndexAt= function(index){
    var pointer = -1;
    if(index>-1 && index <this.observerlist.length){
        this.observerlist.splice(index,1);
        pointer=index;
    }
    return pointer;
};
ObserverList.prototype.IndexOf=function(index,startIndex){
    if(typeof startIndex === null){
        startIndex =0;
    }
    var i = startIndex,pointer = -1;
    while(i<this.observerlist.length){
        if(this.observerlist[i]===obj){
            pointer = i;
            break;
        }
        i++;
    }
    return pointer;
};
var obl = new ObserverList();
obl.Add("o1");
obl.Add("o2");

// console.log(obl.Count());
// console.log(obl.Get(1));
// console.log(obl.RemoveIndexAt(1));
// console.log(obl.Count());
// console.log(obl.Get(1));

// 2
// o2
// 1
// 1
// undefined
function Observer (name){
    this.name = name;

}
Observer.prototype.Update=function(){
    console.log("%s : Update receive...",this.name);
};

function Subject(){
    this.observerlist = new ObserverList();
}
Subject.prototype.AddObserver = function(obj){
    this.observerlist.Add(obj);
}
Subject.prototype.RemoveObserver = function(obj){
    this.observerlist.RemoveIndexAt(this.observerlist.IndexOf(obj,0));
};
Subject.prototype.Len = function(obj){
    return this.observerlist.Count();
};
Subject.prototype.Notify =function(context){
    var len = this.observerlist.Count();
    for (var i = 0;i<len;i++){
        this.observerlist.Get(i).Update(context);
    }
};
var s = new Subject();
s.AddObserver(new Observer("Mike"));
s.AddObserver(new Observer("Alice"));
console.log(s.Len())
s.Notify();
// Mike : Update receive...
// Alice : Update receive...