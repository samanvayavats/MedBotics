import express from "express";
import cookieParser  from "cookie-parser"
import cors from "cors"
const app = express()

app.use(
  cors({
    origin:"http://localhost:3000",
    credentials: true,              
  })
);

app.use(express.json())
app.use(cookieParser())

import doctorRoute from "./routes/doctor.route.js";

app.use("/api/v1/doctor" , doctorRoute)

export {app}