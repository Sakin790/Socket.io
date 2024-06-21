import express from "express"
import http from "http"
import path from "path"
import { Server } from "socket.io"




const app = express()
const PORT = 9090


app.use(express.static(path.resolve("./public")))
const server = http.createServer(app)


app.get("/", (req, res) => {
    res.sendFile("./public/index.html")
})

server.listen(PORT, () => {
    console.log(` Server is running at port ${PORT}`);
})