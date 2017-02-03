var myLogSingleton = (function(){
    var instance ;
    var initInstance = function(){
        return {
            Error:function(message){
                return "Error : "+message;
            },
            Warning:function(message){
                return "Warning : "+message;
            },
            Info:function(message){
                return "Info : "+message;
            },
            Debug:function(message){
                return "Debug : "+message;
            }
        };
    };
    return {
        getInstance :function(){
            if(!instance){
                instance = initInstance();
            }
            return instance;
        }
    };
})();

var logger = myLogSingleton.getInstance();
console.log(logger.Debug("This is a test"));
var logger2 = myLogSingleton.getInstance();
console.log(logger === logger2);
// Debug : This is a test
// true