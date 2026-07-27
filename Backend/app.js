const http = require('http');
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const app = express();
// Express CORS Setup
app.use(cors({
    origin: '*',
    credentials: true
}));
const server = http.createServer(app);
// Socket.IO Server CORS Setup
const io = new Server(server, {
    cors: {
        origin: '*', // Production/Testing ke liye saare origins allow karta hai
        methods: ['GET', 'POST'],
        credentials: true
    }
});
io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

// 👇 YE NAYA CODE ADD KARO
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// 👆 YAHAN TAK

// Extra: Express server handle
module.exports = { app, server, io };
