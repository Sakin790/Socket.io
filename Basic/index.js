import express from "express"
import http from "http"
import path from "path"
import { Server } from "socket.io"






const app = express()
const port = 8080


app.use(express.static(path.resolve("./public")))
const server = http.createServer(app)

const io = new Server(server)

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.get('/', (req, res) => {
    return res.sendFile("./public/index.html")
})
server.listen(port, () => {
    console.log(`Server listening on ${port}`);
})
