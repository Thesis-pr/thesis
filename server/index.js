const app = require("express")();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors')
const userRoute = require("./route/usersRoute")
const driveRoute = require("./route/driverRoute")

app.use(cors());
app.use('/users', userRoute);
app.use('/drivers', driveRoute);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('user_connected', (data) => {
    console.log(`User connected with ID: ${data.userId}`);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('send_message', (data) => {
    console.log('Received message:', data);
    socket.broadcast.emit('received-message', {
      message: data.message,
      senderId: data.senderId
    });
  });
});

const PORT = 3000


app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});