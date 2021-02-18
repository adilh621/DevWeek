const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const {addUser , removeUser , getUser , getUsersInRoom} = require("./user.js")


const PORT = process.env.PORT || 5000;

const router = require('./router')

// socket io middleware

const app = express();
const server = http.createServer(app)
const io = socketio(server, {
    cors: {
        origin : "*",
    }
})

app.use(express.static("client/build"))


io.on('connection',(socket)=>{
    

    socket.on('join' , ({name , room},callback)=>{
        

        const {error,user} = addUser({id: socket.id , name , room})
        if(error) return callback(error)

        socket.emit('message',{user:'admin',text: `${user.name}, welcome to the room`})
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        socket.join(user.room);

        callback();


        
    })

    socket.on('sendMessage',(message,callback)=>{
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    })

    socket.on('disconnect' , ()=>{
        console.log('user disconnected and left chat')
    })
})


app.use(router)


server.listen(PORT, ()=> console.log(`Server has started on port ${PORT}`))
