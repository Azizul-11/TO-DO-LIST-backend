import express from "express";
import userRouter from "./routes/user.js"
import taskrouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser"
import { errorMiddleware } from "./middlewear/error.js";
import cors from "cors"

export const app=express();

config({
    path:"./data/config.env"
})
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials:true,
}));
const router =express.Router();



app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskrouter);

app.use(errorMiddleware)

