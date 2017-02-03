var ApiManager ={
    "buySomething":function(item){
        console.log("Buying:",item);
    },
    "sellSomething":function(item){
        console.log("Selling:",item);
    },
    "DropSomething":function(item){
        console.log("Droping:",item);
    },
    Exec:function(command){
        return this[command]&&this[command].apply(this,[].slice.call(arguments,1));
    }
};


ApiManager.Exec("buySomething","books");
// Buying: books
ApiManager.Exec("notbuySomething","books");
// 