import express from "express"
import http from "http"
import path from "path"
import { Server } from "socket.io"






const app = express()
const port = 8080
const io= 

app.use(express.static(path.resolve("./public")))
const server = http.createServer(app)




app.get('/', (req, res) => {
    return res.sendFile("./public/index.html")
})
server.listen(port, () => {
    console.log(`Server listening on ${port}`);
})
