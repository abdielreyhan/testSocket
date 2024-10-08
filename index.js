const express = require('express');

const app = express();

const server=require('http').createServer(app);

const io = require('socket.io')(server,{
    cors: { origin : "*" }
});

io.on('connection',(socket)=>{
    console.log('connection');

    socket.on('sendAlertToServer',(message)=>{
        console.log(message);
        io.sockets.emit('sendAlertToClient',message);
        // socket.broadcast.emit('sendChatToClient',message);
    });

    socket.on('sendPenjualanOlehToServer',(message)=>{
        console.log(message);
        io.sockets.emit('sendPenjualanOlehToClient',message);
        // socket.broadcast.emit('sendChatToClient',message);
    });
    
    socket.on('sendTestPrint',(message)=>{
        console.log(message);
        io.sockets.emit('sendTestPrintClient',message);
        // socket.broadcast.emit('sendChatToClient',message);
    });

    socket.on('disconnect',(socket)=>{
        console.log('disconnect');
    });
});

server.listen(3000,()=>{
    console.log('server is running');
});