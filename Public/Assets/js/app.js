var MyApp = (()=>{
    const init = (user_id,meeting_id)=>{
        alert("from app.js");
        eventProcessForSignalingServer();
    }

    const eventProcessForSignalingServer = ()=>{
        socket = io.connect();
        socket.on("connect",()=>{
            alert("Socket connected to client side !");
        })
    }

    return {
        _init:function(user_id, meeting_id){
            init(user_id,meeting_id);
        }
    }
})();