// const express = require("express")
// const http = require('http')
// const socketIo = require('socket.io')
// const cors = require('cors')
// const userRoute = require("./route/usersRoute")
// const driveRoute = require("./route/driverRoute")
// const chatRouter = require("./route/chatRoute.js")
// const messageRouter = require("./route/messageRoute.js")
// const commentRouter = require ("./route/commentRoute.js")

// const app = express(); 
// const server = http.createServer(app)
// const io = socketIo(server)

// app.use(express.json())
// app.use(cors())
// app.use('/users', userRoute)
// app.use('/drivers', driveRoute)
// app.use('/chat', chatRouter)
// app.use('/message', messageRouter)
// app.use('/comment', commentRouter)

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('join_room', (roomId) => {
//     socket.join(roomId);
//     console.log(`User joined room: ${roomId}`);
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });

//   socket.on('send_message', (data) => {
//     console.log('Received message:', data);
//     io.to(data.roomId).emit('received-message', {
//       message: data.message,
//       senderId: data.senderId
//     });
//   });
// });

// const PORT = 3000;


// server.listen(PORT, () => {
//   console.log(`Server listening at http://localhost:${PORT}`);
// });

const express = require("express");
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const {Message} = require('../server/indexdatabase.js')
const userRoute = require("./route/usersRoute")
const driveRoute = require("./route/driverRoute")
const chatRouter = require("./route/chatRoute.js")
const routeRequest = require("./route/request.js")
const messageRouter = require ("./route/messageRoute.js")
const paymentRouter = require ("./route/payment.js")
const requestRouter = require ("./route/request.js")
const app = express();





const server = http.createServer(app);
const io = socketIo(server)
require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME_1,
  api_key: process.env.CLOUDINARY_API_KEY_1,
  api_secret: process.env.CLOUDINARY_API_SECRET_1,
});
// app.use(express.static('/opt/lampp/htdocs/testproject/'))
app.use(express.json({ limit: '100mb' }));

app.use(cors());
app.use('/users', userRoute)
app.use('/drivers', driveRoute)
app.use('/chat', chatRouter)
app.use('/request', routeRequest)
app.use('/message', messageRouter)
app.use('/payment', paymentRouter)
app.use('/request', requestRouter)
io.on('connection', (socket) => {
    console.log("hello")
    console.log('A user connected:', socket.id);

    socket.on('join_room', (roomId) => {
        socket.join(roomId);
        console.log(`User ${socket.id} joined room: ${roomId}`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });

    socket.on('send_message',  async (data) => {
        console.log("data message", data)
        try {
            const message= await Message.create({
                chatId:1,
                content: data.message,
                sender_Id: data.senderId
            })
        }
        catch(error) {
            console.log("error storing the message", error)
        }

        io.to(data.roomId).emit('received-message', {
            _id: data._id,
            message: data.message,
            senderId: data.senderId,
            createdAt: data.createdAt
        });
    })
    socket.on('send_image',  async(data) => {
        console.log("Received image data (base64)", data)
        // const picture = data.image;
        // const uploaded = await cloudinary.uploader.upload(picture, {})
        // console.log(uploaded)
        // try {
        //     const message= await Message.create({
        //         chatId:1,
        //         content: uploaded.secure_url,
        //         sender_Id: data.senderId
        //     })
        // }
        // catch(error) {
        //     console.log("error storing the message", error)
        // }
        io.to(data.roomId).emit('received-message', {
            _id: data._id,
            image: data.image, 
            senderId: data.senderId,
            createdAt: data.createdAt
        });
    });
});

const PORT = 3000;



server.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});