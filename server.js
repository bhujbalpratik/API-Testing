import express from "express";
import { home } from "./controllers/server.controller.js";
import userRouter from "./router/user.router.js";
import { MongoConnection } from "./config/mongoose.js";
import { config } from "dotenv";

config({
    path: "./config/config.env"
})

const app = express();

MongoConnection();

app.use(express.json());


app.use("/api/v1/user", userRouter);
app.get('/', home)


app.listen(process.env.PORT, () => {
    console.log(`Server is working on port ${process.env.PORT}`);
})