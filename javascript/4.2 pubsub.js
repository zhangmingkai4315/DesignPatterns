var pubsub = {};
(function(q){
 var topics = {};
 var subuid = -1;
 q.publish = function(topic,args){
     if(!topics[topic]){
         return false;
     }
     var subscribers = topics[topic];
     var len = subscribers?subscribers.length:0;
     while(len--){
         subscribers[len].func(topic,args);
     }
     return this;
 };
 q.subscribe = function(topic,func){
     if(!topics[topic]){
         topics[topic]=[];
     }
     var token =(++subuid).toString();
     topics[topic].push({
         token:token,
         func:func
     });
     return token;
 };
 q.unsubscribe = function(token){
     for(var i in topics){
         if(topics[i]){
             for(var j=0,k=topics[i].length;j<k;j++){
                 if(topics[i][j].token === token){
                     topics[i].splice(j,1);
                     return token;
                 }
             }
         }
     }
     return this;
 };
}(pubsub));


var messageLogger = function(topic,data){
    console.log("Logging: "+topic+":"+data);
};

var subscription = pubsub.subscribe("inbox",messageLogger);

pubsub.publish("inbox","Hello");
pubsub.publish("inbox",{"sender":"Mike","Message":"hi"});

// Logging: inbox:Hello
// Logging: inbox:[object Object]