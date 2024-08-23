const app = require("express")();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');

const userRoute = require('../server/route/usersRoute');
const driveRoute = require('../server/route/driverRoute');

app.use(cors());
app.use('/users', userRoute);
app.use('/drivers', driveRoute);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('user_connected', (data) => {
    console.log(`User connected with ID: ${data.userId}`);
    // You can add additional logic here if needed
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('send_message', (data) => {
    console.log('Received message:', data);
    // Broadcast the message to all connected clients except the sender
    socket.broadcast.emit('received-message', {
      message: data.message,
      senderId: data.senderId
    });
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});