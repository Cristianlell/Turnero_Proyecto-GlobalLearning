import "dotenv/config";

import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import dataRoute from "./routes/dataRoute.js";
import authRoute from "./routes/authRoute.js";

const app = express();
const server = http.createServer(app);

//Middleware
app.use(express.json())
app.use(cors())

//Rutas
app.use('/api/data',dataRoute)
app.use('/api/auth',authRoute)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    },
});

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

server.listen(process.env.PORT, () => {
    console.log(`Listening in port ${process.env.PORT}`);
});
